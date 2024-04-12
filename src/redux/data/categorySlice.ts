import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesName } from "./operations";

export default interface Category {
  categoriesName: string[];
}

const initialState: Category = {
  categoriesName: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesName.fulfilled, (state, action) => {
      state.categoriesName = action.payload;
    });
  },
});

export const categoryReducer = categorySlice.reducer;
