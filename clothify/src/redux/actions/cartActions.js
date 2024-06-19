import { ADD_TO_CART,REMOVE_FROM_CART,INCREMENT_QTY,DECREMENT_QTY,CLEAR_CART} from '../actionTypes/cartActionTypes';


export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});

export const incrementQty = (id) => ({
  type: INCREMENT_QTY,
  payload: { id },
});

export const decrementQty = (id) => ({
  type: DECREMENT_QTY,
  payload: { id },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
