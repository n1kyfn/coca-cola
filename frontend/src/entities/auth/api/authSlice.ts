import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TInitialState } from "../model";

const storedUser = localStorage.getItem("user");

const initialState: TInitialState = {
  user: JSON.parse(storedUser) || null,
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<TInitialState>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("accessToken", state.accessToken);
      localStorage.setItem("refreshToken", state.refreshToken);
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;

      localStorage.clear();
    }
  },
});

export const { logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
