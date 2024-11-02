"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/cart/slice";
import { ButtonComponent, Card } from "@/components";
import styles from "../styles/home.module.sass";
import type { Item } from "@/types/Cart";

interface HomeProps {
  progress: number;
  loadMoreAction: () => void;
  hasNextPage: boolean;
  items: Item[];
}

export default function HomeClient({ progress, items, loadMoreAction, hasNextPage }: HomeProps) {
  const dispatch = useDispatch();
  
  const handleItemClick = (item : Item) => {
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
            <ButtonComponent onClick={() => {handleItemClick(item)}}>
              Adicionar ao Carrinho
            </ButtonComponent>
          </Card.Root>
        ))}
      </section>

      <ButtonComponent
        progress={progress}
        className={styles.load_more}
        backgroundColor="#393939"
        onClick={() => {loadMoreAction()}}
      >
        {progress === 100 ? "Você já viu tudo" : "Carregar mais"}
      </ButtonComponent>
    </main>
  );
}
