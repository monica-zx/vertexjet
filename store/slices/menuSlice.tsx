import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NormalizedMenuItem } from "@/lib/types";

interface MenuState {
  items: NormalizedMenuItem[];
  footer: NormalizedMenuItem[]; // added footer state
}

const initialState: MenuState = {
  items: [],
  footer: [], // initialize footer
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<NormalizedMenuItem[]>) => {
      state.items = action.payload;
    },
    setFooterMenu: (state, action: PayloadAction<NormalizedMenuItem[]>) => {
      state.footer = action.payload;
    },
  },
});

export const { setMenu, setFooterMenu } = menuSlice.actions;
export default menuSlice.reducer;
