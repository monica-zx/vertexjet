// store/slices/headerSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HeaderState {
  phone_label?: string;
  phone_number_link?: string;
  cta_label?: string;
  cta_link?: string;
}

const initialState: HeaderState = {};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeader: (state, action: PayloadAction<HeaderState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setHeader } = headerSlice.actions;
export default headerSlice.reducer;
