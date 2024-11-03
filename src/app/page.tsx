"use client";
import React, {useState} from 'react';
import HomeClient from './page.client';
import { API_URL } from '../constants';
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchData } from '@/utils/fetchData';

export default function Home() {

  // useInfiniteQuery é útil para paginar dados eficientemente, sem precisar carregar todos os dados de uma vez
  const { status, data, fetchNextPage, hasNextPage, error } = useInfiniteQuery({
    queryKey: ["items"],
    queryFn: ({ pageParam = 1 }) => fetchData(API_URL, pageParam, 12),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.metadata.hasNextPage) {
        return pages.length + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  if (status === 'error') {
    return;
  }

  if (!data) {
    return; 
  }

    const items = data.pages.flatMap(page => page.data);


return (
    <HomeClient
      progress={100 * (data.pages.length / data.pages[0].metadata.pageCount)}
      items={items}
      loadMoreClick={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
}