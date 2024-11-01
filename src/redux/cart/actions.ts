import { Item } from '@/types/Cart';
import CartActionTypes from './action-types';

export const addItemToCart = (item: Item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (id: string) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id,
});

export const increaseItemQuantity = (id: string) => ({
  type: CartActionTypes.INCREASE_ITEM_QUANTITY,
  payload: id,
});

export const decreaseItemQuantity = (id: string) => ({
  type: CartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: id,
});