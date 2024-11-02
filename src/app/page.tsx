"use client";
import HomeClient from './page.client';
import { API_URL } from '../constants';
import { useQuery } from "@tanstack/react-query";
import { fetchData } from '@/utils/fetchData';

export default function Home() {
  const currentPage = 1;
  const totalPages = 4; 
  const progress = (currentPage / totalPages) * 100;

  const { status, data, error } = useQuery({
    queryKey: ["items", currentPage, 12],
    queryFn: () => fetchData(API_URL, currentPage, 12),
  });


  if (status === 'loading') {
    return <div>Carregando...</div>; {/* utilizarei o framer motion aqui */}
  }

  if (status === 'error') {
    return <div>Ocorreu um erro: {error.message}</div>; {/* utilizarei o framer motion aqui */}
  }

  if (!data) {
    return <div>Sem dados disponíveis</div>; {
      /* utilizarei o framer motion aqui */
    }
  }

  return <HomeClient progress={progress} items={data.data} />;
}