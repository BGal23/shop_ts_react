import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { themeReducer } from "./data/themeSlice";
import { categoryReducer } from "./data/categorySlice";
import { cartReducer } from "./data/cartSlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token"],
};

const themePersistConfig = {
  key: "theme",
  storage: storage,
};

const cartPersistConfig = {
  key: "cart",
  storage: storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
    cart: persistReducer(cartPersistConfig, cartReducer),
    category: categoryReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
