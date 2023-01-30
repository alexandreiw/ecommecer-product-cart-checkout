export const selectProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce((acc, curr) => acc + curr.quantity, 0);
};

export const selectProductsTotalPrice = (rootReducer) => {
  const totalPrice = rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  //monetary mask real
  return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalPrice);
};
