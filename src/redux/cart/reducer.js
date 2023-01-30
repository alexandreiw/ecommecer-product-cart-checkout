import CartActionsTypes from './actionTypes';

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionsTypes.ADD_PRODUCT:
      const productIsAlredyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productIsAlredyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + action.payload.quantity }
              : product
          ),
        };
      }

      return {
        ...state,
        products: [...state.products, { ...action.payload }],
      };

    case CartActionsTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };

    case CartActionsTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product
        ),
      };

    case CartActionsTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product
          )
          .filter((product) => product.quantity > 0),
      };

    case CartActionsTypes.REMOVE_ALL_PRODUCTS:
      return {
        ...state,
        products: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
