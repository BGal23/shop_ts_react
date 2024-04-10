import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, addProduct, removeProduct } from "./operations";

interface State {
  items: Product[];
  isLoading: boolean;
  error: null | boolean | string;
}

interface Action {
  payload: boolean;
  type: string;
}

interface Product {
  id: string;
  name: string;
  number: number;
}

const handlePending = (state: State) => {
  state.isLoading = true;
};

const handleRejected = (state: State, action: Action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = (action: Action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action: Action) => {
  return action.type.endsWith("/rejected");
};

const initialState: State = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items = actions.payload;
      })

      .addCase(addProduct.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(actions.payload);
      })

      .addCase(removeProduct.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === actions.payload.id
        );

        state.items.splice(index, 1);
      })

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone use old function, fix it!";
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
