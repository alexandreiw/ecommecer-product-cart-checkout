import CartActionsTypes from './actionTypes';

export const addProductToCart = (payload) => ({
  type: CartActionsTypes.ADD_PRODUCT,
  payload,
});

export const removeProductToCart = (payload) => ({
  type: CartActionsTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductQuantity = (payload) => ({
  type: CartActionsTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});

export const decreaseProductQuantity = (payload) => ({
  type: CartActionsTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});

export const removeAllProducts = () => ({
  type: CartActionsTypes.REMOVE_ALL_PRODUCTS,
});
