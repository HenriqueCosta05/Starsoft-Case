import CartActionTypes from './action-types';

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      const isItemInCart = state.items.some((item) => item.id === action.payload.id);
      if (isItemInCart) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, amount: item.amount + 1 } : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, amount: 1 }],
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case CartActionTypes.INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
        ),
      };

    case CartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;