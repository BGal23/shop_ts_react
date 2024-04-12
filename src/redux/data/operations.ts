import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoriesName = createAsyncThunk(
  "category/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      return res.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
