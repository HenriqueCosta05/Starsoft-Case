"use client";

import { useSelector, useDispatch } from 'react-redux';
import React, { useRef } from "react";
import CheckoutClient from './page.client';
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '@/redux/cart/slice';
import { selectItemsTotalPrice } from "@/redux/cart/cart.selectors"

export default function Checkout() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const itemRefs = useRef(items.map(() => React.createRef()));

  const handleIncrease = (id: string) => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseItemQuantity(id));
  };

  const handleDelete = (id: string) => {
    dispatch(removeItem(id));
  };

  const totalPrice = useSelector(selectItemsTotalPrice);

  return (
    <CheckoutClient
      items={items}
      handleIncrease={handleIncrease}
      handleDecrease={handleDecrease}
      handleDelete={handleDelete}
      itemRefs={itemRefs}
      totalPrice={totalPrice}
    />
  );
}