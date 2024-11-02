import { Item } from '@/types/Cart';
import CartActionTypes from './action-types';

export const addItemToCart = (item: Item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (id: number) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id,
});

export const increaseItemQuantity = (id: number) => ({
  type: CartActionTypes.INCREASE_ITEM_QUANTITY,
  payload: id,
});

export const decreaseItemQuantity = (id: number) => ({
  type: CartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: id,
});