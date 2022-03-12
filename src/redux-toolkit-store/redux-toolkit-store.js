import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    dark: (state) => {
      state.theme = "dark";
    },
    light: (state) => {
      state.theme = "light";
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.status = "logout";
      state.user = null;
    },
    login: (state, action) => {
      state.status = "loggedin";
      state.user = action?.payload?.user;
    },
  },
});

export const userActions = userSlice.actions;
export const themeActions = themeSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    theme: themeSlice.reducer,
  },
});
