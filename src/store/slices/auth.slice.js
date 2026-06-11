import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  authReady: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.authReady = true;
    },

    logout(state) {
      Object.assign(state, initialState);
      state.authReady = true; // auth check completed, user is logged out
    },

    setUser(state, action) {
      state.user = action.payload;
    },

    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },

    setAuthReady(state, action) {
      state.authReady = action.payload;
    },
  },
});

export const {
  login,
  logout,
  setUser,
  setAuthenticated,
  setAuthReady,
} = authSlice.actions;

export default authSlice.reducer;