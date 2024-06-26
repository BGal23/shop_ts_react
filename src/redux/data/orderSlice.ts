import { createSlice } from "@reduxjs/toolkit";

interface Link {
  title: string;
  url: string;
  available: boolean;
}

export interface UserData {
  firstName?: string;
  company?: string;
  lastName?: string;
  nip?: string;
  street?: string;
  address?: string;
  city?: string;
  country?: string;
  phone?: string;
  email?: string;
  comment?: string;
  isCompany?: boolean;
  otherAddress?: boolean;
}

export interface OrderData {
  links: Link[];
  delivery: {
    country: string;
    option: string;
    cost: number;
    payMethod: string;
    payMethodType: string;
    additionalCost: number;
  };
  user: UserData;
  deliveryAddress: UserData;
}

const user = {
  firstName: "",
  company: "",
  lastName: "",
  nip: "",
  street: "",
  address: "",
  country: "",
  city: "",
  phone: "",
  email: "",
  isCompany: false,
};

const initialState: OrderData = {
  links: [
    { title: "CART", url: "cart", available: true },
    { title: "YOUR DATA", url: "your_data", available: false },
    { title: "SUMMARY", url: "summary", available: false },
  ],
  delivery: {
    country: "Poland 🇵🇱",
    option: "",
    cost: 0,
    payMethod: "",
    payMethodType: "none",
    additionalCost: 0,
  },
  user: { ...user, otherAddress: false },
  deliveryAddress: { ...user },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addDelivery: (state, action) => {
      state.delivery = { ...state.delivery, ...action.payload };
    },
    changeLinkAvailable: (state, action) => {
      state.links[action.payload.index].available = action.payload.available;
    },
    addUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    addDeliveryAddress: (state, action) => {
      if (action.payload === 0) {
        state.deliveryAddress = {};
      } else {
        state.deliveryAddress = { ...state.deliveryAddress, ...action.payload };
      }
    },
  },
});

export const { addDelivery, changeLinkAvailable, addUser, addDeliveryAddress } =
  orderSlice.actions;
export const orderReducer = orderSlice.reducer;
