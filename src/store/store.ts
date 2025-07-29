// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import stringReducer from "./stringSlice";
import toggleReducer from "./toggleSlice";
import listReducer from "./listSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    string: stringReducer,
    toggle: toggleReducer,
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;