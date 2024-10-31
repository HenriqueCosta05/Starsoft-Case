"use client"
import React from 'react';
import { CardComponent } from '@/components';
import styles from '../styles/Home.module.sass';
import image from './images/examples.png';

export default function Home() {
  const cardData = {
    title: 'Lorem Ipsum',
    shortDescription: 'Redesigned from scratch and completely revised.',
    image: {
      src: image,
      alt: 'Sample Product Image',
    },
    price: {
      icon: {
        src: image,
        alt: 'Price Icon',
      },
      value: '$99.99',
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