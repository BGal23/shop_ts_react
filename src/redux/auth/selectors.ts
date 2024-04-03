import { AuthState } from '../store';

export const selectIsLoggedIn = (state:AuthState):boolean => state.auth.isLoggedIn;
export const selectUserName = (state:AuthState):string => state.auth.user.name;
export const selectIsRefreshing = (state:AuthState):boolean => state.auth.isRefreshing;