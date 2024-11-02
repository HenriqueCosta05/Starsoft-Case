import { RootState } from '@/redux/store';

export const selectItemsCount = (state: RootState) => {
  return state.cart.items.reduce((acc, curr) => acc + curr.amount, 0);
};

export const selectItemsTotalPrice = (state: RootState) => {
  return state.cart.items.reduce((acc, curr) => acc + curr.price * curr.amount, 0);
};