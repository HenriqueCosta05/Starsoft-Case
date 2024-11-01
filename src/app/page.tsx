"use client";

import React from 'react';
import { useDispatch } from 'react-redux'
import {addItemToCart} from '@/redux/cart/actions'
import { ButtonComponent, Card } from '@/components';
import styles from '../styles/home.module.sass';
import image from './images/examples.png';
import coin from './images/coin.svg';

export default function Home() {
  const dispatch = useDispatch();

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
      text: 'Adicionar ao Carrinho',
    },
  };

  const progress = 30;

  const handleItemClick = () => {
    dispatch(addItemToCart({
      id: cardData.id,
      name: cardData.name,
      description: cardData.description,
      image: cardData.image.src,
      price: cardData.price.value,
    }));
  }
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
            <ButtonComponent onClick={handleItemClick}>
              {cardData.actionButton.text}
            </ButtonComponent>
          </Card.Root>
        ))}
      </section>
      
      <ButtonComponent progress={30} className={styles.load_more} backgroundColor="#393939">
        {progress === 100 ? "Você já viu tudo" : "Carregar mais"}
      </ButtonComponent>
    </main>
  );
}