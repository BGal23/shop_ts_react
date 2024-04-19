import { Category } from "./categorySlice";
import { Cart } from "./cartSlice";
import { Theme } from "./themeSlice";

interface State {
  theme: Theme;
  category: Category;
  cart: Cart;
}

export const selectThemeMode = (state: State) => state.theme.darkMode;
export const selectCart = (state: State) => state.cart.products;
export const selectCategoriesName = (state: State) =>
  state.category.categoriesName;
