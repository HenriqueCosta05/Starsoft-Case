"use client";
import React, {useState} from "react";
import type { Item } from "@/types/Cart";
import styles from "@/styles/checkout.module.sass";
import { Arrow, Bin, Coin } from "@/components/Icons";
import { RedirectComponent, Card, WrapperComponent, ButtonComponent} from "@/components";
import { motion } from "framer-motion"
import { toast } from "react-toastify";

interface PageProps {
  items: Item[];
  handleIncrease: (id: number) => void;
  handleDecrease: (id: number) => void;
  handleDelete: (id: number) => void;
  totalPrice: number;
}
export default function CheckoutClient({items, handleIncrease, handleDecrease, handleDelete, totalPrice}: PageProps) {
    const [text, setText] = useState("Finalizar compra")

    const handleBuyClick = () => {
      alert("Compra finalizada com sucesso!")
      setText("Compra Finalizada!")
      setTimeout(() => {
        window.location.reload()
        setText("Finalizar compra")
      }, 1000)
    }
  return (
    <main className={styles.base}>
      {items && items.length !== 0 ? (
        <>
          <motion.section
            className={styles.intro_section}
            id="intro"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RedirectComponent>
              <Arrow />
            </RedirectComponent>
            <h1 className={styles.title}>Mochila de Compras</h1>
          </motion.section>
          <motion.section className={styles.items_section} id="checkout-items">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
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
                    <Card.Counter
                      amount={item.amount}
                      handleIncrement={() => {
                        handleIncrease(item.id);
                      }}
                      handleDecrement={() => {
                        handleDecrease(item.id);
                      }}
                    />
                    <Card.Toggle
                      onClick={() => {
                          handleDelete(item.id);
                          toast.success("Item removido do carrinho com sucesso!")
                      }}
                    >
                      <Bin />
                    </Card.Toggle>
                  </Card.Wrapper>
                </Card.Wrapper>
              </Card.Root>
              </motion.div>
            ))}
          </motion.section>
          <WrapperComponent className={styles.finish_order_section}>
            <WrapperComponent className={styles.total}>
              <h1>Total</h1>
              <span className={styles.price}>
                <Coin />
                <h2>{totalPrice !== undefined ? totalPrice : 0} ETH</h2>
              </span>
            </WrapperComponent>
            <ButtonComponent className={styles.finish_order_button} onClick={()=> {handleBuyClick()}}>
              {text}
            </ButtonComponent>
          </WrapperComponent>
          </>
      ) : (
        <section className={styles.empty_section}>
          <h1>Ainda não existem itens no carrinho!</h1>
          <RedirectComponent>
            <ButtonComponent>Voltar à página inicial</ButtonComponent>
          </RedirectComponent>
        </section>
      )}
    </main>
  );
}