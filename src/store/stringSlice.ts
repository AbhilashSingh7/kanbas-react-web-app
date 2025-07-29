// src/store/stringSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StringState {
  value: string;
}

const initialState: StringState = {
  value: "",
};

const stringSlice = createSlice({
  name: "string",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setMessage } = stringSlice.actions;
export default stringSlice.reducer;