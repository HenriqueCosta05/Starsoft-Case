"use client";

import { useSelector, useDispatch } from 'react-redux';
import React, { useRef } from "react";
import CheckoutClient from './page.client';
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '@/redux/cart/slice';
import { selectItemsTotalPrice } from "@/redux/cart/cart.selectors"
import type { RootState } from '@/redux/store';

export default function Checkout() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const handleIncrease = (id: number) => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseItemQuantity(id));
  };

  const handleDelete = (id: number) => {
    dispatch(removeItem(id));
  };

  const totalPrice = useSelector(selectItemsTotalPrice);

  return (
    <CheckoutClient
      items={items}
      handleIncrease={handleIncrease}
      handleDecrease={handleDecrease}
      handleDelete={handleDelete}
      totalPrice={totalPrice}
    />
  );
}