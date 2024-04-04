import { AuthState } from "../store";

export const selectIsLoggedIn = (state: AuthState): boolean => state.isLoggedIn;
export const selectUserName = (state: AuthState): string | null =>
  state.user.name;
export const selectIsRefreshing = (state: AuthState): boolean =>
  state.isRefreshing;
