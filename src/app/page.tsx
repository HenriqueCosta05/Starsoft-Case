"use client";
import React from 'react';
import { ButtonComponent, Card } from '@/components';
import styles from '../styles/home.module.sass';
import image from './images/examples.png';
import coin from './images/coin.svg';

export default function Home() {
  const cardData = {
    name: 'Lorem Ipsum',
    description: 'Redesigned from scratch and completely revised.',
    image: {
      src: image,
      alt: 'Sample Product Image',
    },
    price: {
      icon: {
        src: coin,
        alt: 'Price Icon',
      },
      value: 100.00,
    },
    actionButton: {
      text: 'Comprar',
      action: () => alert('Teste'),
    },
  };

  return (
    <main className={styles.container}>
      <section className={styles.cards_container}>
        {[...Array(12)].map((_, index) => (
          <Card.Root key={index}>
            <Card.Image src={cardData.image.src} alt={cardData.image.alt} />
            <Card.Title>{cardData.name}</Card.Title>
            <Card.Description>{cardData.description}</Card.Description>
            <Card.Pricing>
              {cardData.price.value}
            </Card.Pricing>
            <ButtonComponent onClick={cardData.actionButton.action}>
              {cardData.actionButton.text}
            </ButtonComponent>
          </Card.Root>
        ))}
      </section>
      
      <ButtonComponent progress={30} className={styles.load_more}>
        Carregar Mais
      </ButtonComponent>
    </main>
  );
}