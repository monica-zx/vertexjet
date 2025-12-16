// store/slices/headerSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FooterState {
  logo_tag_line?: string;
    newsletter_short_des?:string;
      quick_links?:string;
      destination_links?:string;
      connect_text?:string;
      copyright_text?:string;
}

const initialState: FooterState = {};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    setFooter: (state, action: PayloadAction<FooterState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setFooter } = footerSlice.actions;
export default footerSlice.reducer;
