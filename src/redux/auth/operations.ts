import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Auth } from "./selectors";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthorizationToken = (token: string) => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
};

export interface LoginFormData {
  name?: string;
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  "/users/signup",
  async (credentials: LoginFormData, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      setAuthorizationToken(res.data.token);
      return res.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "/users/login",
  async (credentials: LoginFormData, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthorizationToken(res.data.token);
      return res.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("/users/logout", async (_, thunkAPI) => {
  try {
    const res = await axios.post("/users/logout");
    setAuthorizationToken("");
    return res.data;
  } catch (error: unknown) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  "/users/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as Auth;
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthorizationToken(token);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
