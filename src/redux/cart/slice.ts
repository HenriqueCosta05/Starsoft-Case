import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item, CartState } from '@/types/Cart'

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<Item>) {
      const isItemInCart = state.items.some((item) => item.id === action.payload.id);
      if (isItemInCart) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      state.items = state.items.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      state.items = state.items.map((item) =>
        item.id === action.payload && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
      );
    },
  },
});

export const { addItemToCart, removeItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;