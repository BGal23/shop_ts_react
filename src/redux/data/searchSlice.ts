import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./operations";
import { Product } from "../../components/Product/Product";

export interface Search {
  products: Product[];
}

const initialState: Search = {
  products: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const searchReducer = searchSlice.reducer;
