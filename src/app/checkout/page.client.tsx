"use client";
import React from "react";

import styles from "@/styles/checkout.module.sass";
import { Arrow, Bin, Coin } from "@/components/Icons";
import { RedirectComponent, Card, WrapperComponent, ButtonComponent } from "@/components";
import sampleImage from "@/images/examples.png";

interface PageProps {
    items: unknown;
    handleIncrease: () => void;
    handleDecrease: () => void;
    handleDelete: () => void;
}
export default function CheckoutClient({items, handleIncrease, handleDecrease, handleDelete}: PageProps) {
  return (
    <main className={styles.base}>
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
              <Card.Image src={sampleImage} alt="Sample Product Image" />
            </Card.Wrapper>
            <Card.Wrapper className={styles.main_content}>
              <Card.Wrapper className={styles.item_content}>
                <Card.Title>Item {index}</Card.Title>
                <Card.Description>Descrição do item {index}</Card.Description>
                <Card.Pricing>100.00</Card.Pricing>
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
            <h2>44 ETH</h2>
          </span>
        </WrapperComponent>
        <ButtonComponent className={styles.finish_order_button}>Finalizar Compra</ButtonComponent>
      </WrapperComponent>
    </main>
  );
}