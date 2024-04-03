import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState): boolean =>
  state.auth.isLoggedIn;
export const selectUserName = (state: RootState): string | null =>
  state.auth.user.name;
export const selectIsRefreshing = (state: RootState): boolean =>
  state.auth.isRefreshing;
