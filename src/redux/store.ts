import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import rootReducer from "./theme/root";
import { tasksReducer } from "./products/slice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token"],
};

const themePersistConfig = {
  key: "theme",
  storage: storage,
  whitelist: ["theme"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistConfig, rootReducer),
    cart: tasksReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
