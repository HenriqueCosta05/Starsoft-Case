"use client";
import React from "react";
import type { Item } from "@/types/Cart";
import styles from "@/styles/checkout.module.sass";
import { Arrow, Bin, Coin } from "@/components/Icons";
import { RedirectComponent, Card, WrapperComponent, ButtonComponent } from "@/components";

interface PageProps {
    items: Item[];
    handleIncrease: () => void;
    handleDecrease: () => void;
    handleDelete: () => void;
    totalPrice: number;
}
export default function CheckoutClient({items, handleIncrease, handleDecrease, handleDelete, totalPrice}: PageProps) {
  return (
    <main className={styles.base}>
      {items && items.length !== 0 ? (
        <>
        <section className={styles.intro_section} id="intro">
        <RedirectComponent>
          <Arrow />
        </RedirectComponent>
        <h1 className={styles.title}>Mochila de Compras</h1>
      </section>
      <section className={styles.items_section} id="checkout-items">
        {items.map((item, index) => (
          <Card.Root key={index} orientation="horizontal">
            <Card.Wrapper className={styles.card_image_container}>
              <Card.Image src={item.image} alt="Product image" />
            </Card.Wrapper>
            <Card.Wrapper className={styles.main_content}>
              <Card.Wrapper className={styles.item_content}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Description>{item.description}</Card.Description>
                <Card.Pricing>{item.price}</Card.Pricing>
              </Card.Wrapper>
              <Card.Wrapper className={styles.item_actions}>
                <Card.Counter amount={item.amount} handleIncrement={() => {handleIncrease(item.id)}} handleDecrement={() => {handleDecrease(item.id)}} />
                <Card.Toggle onClick={() => {handleDelete(item.id)}}>
                  <Bin />
                </Card.Toggle>
              </Card.Wrapper>
            </Card.Wrapper>
          </Card.Root>
        ))}
      </section>
      <WrapperComponent className={styles.finish_order_section}>
        <WrapperComponent className={styles.total}>
          <h1>Total</h1>
          <span className={styles.price}>
            <Coin />
            <h2>{totalPrice !== undefined ? totalPrice : 0} ETH</h2>
          </span>
        </WrapperComponent>
        <ButtonComponent className={styles.finish_order_button}>Finalizar Compra</ButtonComponent>
      </WrapperComponent>
      </>
      ): (
        <section className={styles.empty_section}>
          <h1>Ainda não existem items no carrinho!</h1>
          <RedirectComponent>
            <ButtonComponent>Voltar à página inicial</ButtonComponent>
          </RedirectComponent>
        </section>
      )}
      
    </main>
  );
}