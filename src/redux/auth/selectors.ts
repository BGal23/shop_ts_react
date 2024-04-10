interface Auth {
  auth: {
    isLoggedIn: boolean;
    user: {
      name: string | null;
      email: string | null;
    };
    token: string | null;
    isRefreshing: boolean;
  };
}

export const selectIsLoggedIn = (state: Auth): boolean => state.auth.isLoggedIn;
export const selectUserName = (state: Auth): string | null =>
  state.auth.user.name;
export const selectIsRefreshing = (state: Auth): boolean =>
  state.auth.isRefreshing;
