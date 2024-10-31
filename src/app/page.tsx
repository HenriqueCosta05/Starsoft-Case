"use client"
import React from 'react';
import { CardComponent } from '@/components';
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

  const cards = Array.from({ length: 12 }).map((_, index) => (
    <CardComponent key={index} {...cardData} />
  ));

  return (
    <main className={styles.container}>
      <div className={styles.cardsContainer}>
        {cards}
      </div>
    </main>
  );
}