import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  logo?: string;
  favicon?: string;
  phone?: string;
  email?: string;
  social?: Record<string, string>;
}

const initialState: SettingsState = {};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<SettingsState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
