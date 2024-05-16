import { Reducer, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { authReducer } from "./auth/slice";
import { themeReducer } from "./data/themeSlice";
import { categoryReducer } from "./data/categorySlice";
import { cartReducer } from "./data/cartSlice";
import { orderReducer } from "./data/orderSlice";
import { Storage } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";

interface Persist {
  key: string;
  storage: Storage;
  whitelist?: string[];
}

const authPersistConfig: Persist = {
  key: "auth",
  storage: storage,
  whitelist: ["token"],
};

const themePersistConfig: Persist = {
  key: "theme",
  storage: storage,
};

const cartPersistConfig: Persist = {
  key: "cart",
  storage: storage,
};

const orderPersistConfig: Persist = {
  key: "order",
  storage: storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer) as Reducer,
    theme: persistReducer(themePersistConfig, themeReducer) as Reducer,
    cart: persistReducer(cartPersistConfig, cartReducer) as Reducer,
    order: persistReducer(orderPersistConfig, orderReducer) as Reducer,
    category: categoryReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
