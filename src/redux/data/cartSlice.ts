import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Cart {
  products: Product[];
}

const initialState: Cart = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const index: number = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        state.products.push(action.payload);
      } else {
        state.products[index].quantity++;
      }
    },
    minusProduct: (state, action) => {
      const index: number = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[index].quantity--;
    },
    deleteProduct: (state, action) => {
      const index: number = state.products.findIndex(
        (product) => product.id === action.payload
      );
      state.products.splice(index, 1);
    },
  },
});

export const { addProduct, deleteProduct, minusProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
