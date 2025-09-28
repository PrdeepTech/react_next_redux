// src/app/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    todos: todoReducer
  },
});
