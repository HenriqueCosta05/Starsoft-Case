"use client";

import { useSelector, useDispatch } from 'react-redux';
import React, { useRef } from "react";
import CheckoutClient from './page.client';
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "@/redux/cart/actions";

export default function Checkout() {
  const dispatch = useDispatch();
  const { items } = useSelector((rootReducer) => rootReducer.cartReducer);
  const itemRefs = useRef(items.map(() => React.createRef()));

  const handleIncrease = (id: string) => {
    dispatch(increaseItemQuantity(id))
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseItemQuantity(id))
  };

  const handleDelete = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <CheckoutClient
      items={items}
      handleIncrease={handleIncrease}
      handleDecrease={handleDecrease}
      handleDelete={handleDelete}
      itemRefs={itemRefs}
    />
  );
}