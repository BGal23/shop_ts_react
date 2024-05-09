import { Category } from "./categorySlice";
import { Cart } from "./cartSlice";
import { Theme } from "./themeSlice";
import { OrderData } from "./orderSlice";

interface State {
  theme: Theme;
  category: Category;
  cart: Cart;
  order: OrderData;
}

export const selectThemeMode = (state: State) => state.theme.darkMode;
export const selectCart = (state: State) => state.cart.products;
export const selectCategoriesName = (state: State) =>
  state.category.categoriesName;
export const selectOrder = (state: State) => state.order.delivery;
export const selectLinks = (state: State) => state.order.links;
