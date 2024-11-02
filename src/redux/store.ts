// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/redux/cart/slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;