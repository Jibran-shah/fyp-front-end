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
      console.log("[auth/login] BEFORE =>", {
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        authReady: state.authReady,
      });

      state.user = action.payload;
      state.isAuthenticated = true;
      state.authReady = true;

      console.log("[auth/login] AFTER =>", {
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        authReady: state.authReady,
      });
    },

    logout(state) {
      console.log("[auth/logout] BEFORE =>", {
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        authReady: state.authReady,
      });

      state.user = null;
      state.isAuthenticated = false;
      state.authReady = true;

      console.log("[auth/logout] AFTER =>", {
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        authReady: state.authReady,
      });
    },

    setUser(state, action) {
      console.log("[auth/setUser] payload =>", action.payload);

      state.user = action.payload;

      console.log("[auth/setUser] state.user =>", state.user);
    },

    setAuthenticated(state, action) {
      console.log("[auth/setAuthenticated] payload =>", action.payload);

      state.isAuthenticated = action.payload;

      console.log("[auth/setAuthenticated] state.isAuthenticated =>", state.isAuthenticated);
    },

    setAuthReady(state, action) {
      console.log("[auth/setAuthReady] payload =>", action.payload);

      state.authReady = action.payload;

      console.log("[auth/setAuthReady] state.authReady =>", state.authReady);
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