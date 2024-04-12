import { createSlice } from "@reduxjs/toolkit";

export default interface Theme {
  darkMode: boolean;
}

const initialState: Theme = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { themeMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
