"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/cart/slice";
import { ButtonComponent, Card } from "@/components";
import styles from "../styles/home.module.sass";
import type { Item } from "@/types/Cart";
import { toast } from "react-toastify";

interface HomeProps {
  progress: number;
  loadMoreClick: () => void;
  hasNextPage: boolean;
  items: Item[];
}

export default function HomeClient({ progress, items, loadMoreClick, hasNextPage }: HomeProps) {
  const dispatch = useDispatch();
  
  const handleAddToCartClick = (item : Item) => {
    dispatch(
      addItemToCart({
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.image,
        price: item.price,
        amount: 1,
      })
    );
    toast.success("Item adicionado ao carrinho com sucesso!");
  };
  return (
    <main className={styles.container}>
      <section className={styles.cards_container}>
        {items.map((item, index) => (
          <Card.Root key={index} orientation="vertical">
            <Card.Image src={item.image} alt={item.description} />
            <Card.Title>{item.name}</Card.Title>
            <Card.Description>{item.description}</Card.Description>
            <Card.Pricing>{item.price}</Card.Pricing>
            <ButtonComponent onClick={() => {handleAddToCartClick(item)}}>
              Adicionar ao Carrinho
            </ButtonComponent>
          </Card.Root>
        ))}
      </section>

      <ButtonComponent
        progress={progress}
        className={styles.load_more}
        variant="secondary"
        onClick={() => {loadMoreClick()}}
      >
        {progress === 100 ? "Você já viu tudo" : "Carregar mais"}
      </ButtonComponent>
    </main>
  );
}
