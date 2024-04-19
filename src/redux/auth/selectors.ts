import { State } from "./slice";

export interface Auth {
  auth: State;
}

export const selectIsLoggedIn = (state: Auth): boolean => state.auth.isLoggedIn;
export const selectUserName = (state: Auth): string | null =>
  state.auth.user.name;
export const selectIsRefreshing = (state: Auth): boolean =>
  state.auth.isRefreshing;
