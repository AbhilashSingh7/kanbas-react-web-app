// src/store/listSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListState {
  items: string[];
}

const initialState: ListState = {
  items: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items.splice(action.payload, 1);
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;
export default listSlice.reducer;