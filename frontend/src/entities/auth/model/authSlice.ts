import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TInitialState } from "./types";
import { ELSNames } from "../../../shared/config/enums";

const storedUser = localStorage.getItem(ELSNames.USER);

const initialState: TInitialState = {
  isAuth: !!localStorage.getItem(ELSNames.ACCESS_TOKEN),
  user: JSON.parse(storedUser!) || null,
  accessToken: localStorage.getItem(ELSNames.ACCESS_TOKEN) || null,
  refreshToken: localStorage.getItem(ELSNames.REFRESH_TOKEN) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<TInitialState>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuth = true

      if (action.payload.accessToken && action.payload.refreshToken) {
        localStorage.setItem(ELSNames.ACCESS_TOKEN, action.payload.accessToken);
        localStorage.setItem(ELSNames.REFRESH_TOKEN, action.payload.refreshToken);
      }

      localStorage.setItem(ELSNames.USER, JSON.stringify(action.payload.user));
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuth = false

      localStorage.clear();
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload

      localStorage.setItem(ELSNames.ACCESS_TOKEN, action.payload)
    }
  },
});

export const { logout, setAuth, setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
