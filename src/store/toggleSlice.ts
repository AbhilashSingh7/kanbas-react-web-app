// src/store/toggleSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  on: boolean;
}

const initialState: ToggleState = {
  on: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle(state) {
      state.on = !state.on;
    },
    turnOn(state) {
      state.on = true;
    },
    turnOff(state) {
      state.on = false;
    },
  },
});

export const { toggle, turnOn, turnOff } = toggleSlice.actions;
export default toggleSlice.reducer;