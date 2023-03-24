import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "suiiii",
  email: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    emailToken(state, action) {
      state.email = action.payload;
      state.token = state.token === action.payload;
    },
  },
});

export const AuthActions = authSlice.actions;
