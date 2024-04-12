import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../components/Product/Product";

export default interface Cart {
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
      console.log(state.products);
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const index: number = state.products.findIndex(
        (product) => product.id === action.payload
      );
      console.log(state.products, index);

      state.products.splice(index, 1);
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
