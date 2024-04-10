interface Cart {
  cart: {
    items: [];
    isLoading: boolean;
    error: null | boolean | string;
  };
}

export const selectProducts = (state: Cart) => state.cart.items;
export const selectIsLoading = (state: Cart) => state.cart.isLoading;
export const selectError = (state: Cart) => state.cart.error;
