import { combineReducers, createStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const store = createStore(rootReducer);
