import { createSlice } from "@reduxjs/toolkit";

interface Link {
  title: string;
  url: string;
  available: boolean;
}

export interface OrderData {
  links: Link[];
  delivery: {
    country: string;
    option: string;
    cost: number;
    payMethod: string;
    payMethodType: string;
  };
}

const initialState: OrderData = {
  links: [
    { title: "CART", url: "cart", available: true },
    { title: "YOUR DATA", url: "your_data", available: false },
    { title: "SUMMARY", url: "summary", available: false },
  ],
  delivery: {
    country: "pl",
    option: "",
    cost: 0,
    payMethod: "",
    payMethodType: "none",
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addDelivery: (state, action) => {
      state.delivery = { ...state.delivery, ...action.payload };
    },
    changeLinkAvailable: (state, action) => {
      state.links[action.payload].available = true;
    },
  },
});

export const { addDelivery, changeLinkAvailable } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
