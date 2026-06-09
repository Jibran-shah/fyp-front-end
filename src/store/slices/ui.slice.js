import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authLoading: false,

  // future-safe UI flags
  sidebarOpen: true,
  theme: "light",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setAuthLoading: (state, action) => {
      state.authLoading = action.payload;
    },

    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },

    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {
  setAuthLoading,
  toggleSidebar,
  setTheme,
} = uiSlice.actions;

export default uiSlice.reducer;