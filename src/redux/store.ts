import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { PersistConfig } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";

export interface RootState {
  auth: AuthState;
}
export interface AuthState {
  isLoggedIn: boolean;
  user: {
    name: string | null;
    email: string | null;
  };
  token: string | null;
  isRefreshing: boolean;
}

const authPersistConfig: PersistConfig<AuthState> = {
  key: "auth",
  storage: storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: persistReducer(authPersistConfig, authReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
