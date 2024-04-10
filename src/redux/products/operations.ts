import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/contacts");
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "An error occurred"
        );
      } else {
        return thunkAPI.rejectWithValue("An error occurred");
      }
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addItem",
  async ({ name, number }, thunkAPI) => {
    try {
      const res = await axios.post("/contacts", { name, number });
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "An error occurred"
        );
      } else {
        return thunkAPI.rejectWithValue("An error occurred");
      }
    }
  }
);

export const removeProduct = createAsyncThunk(
  "products/removeItem",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "An error occurred"
        );
      } else {
        return thunkAPI.rejectWithValue("An error occurred");
      }
    }
  }
);
