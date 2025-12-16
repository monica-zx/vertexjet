import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomepageACF } from "@/lib/types";

interface HomepageState {
  data: HomepageACF | null;
  loading: boolean;
}

const initialState: HomepageState = {
  data: null,
  loading: false,
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setHomepage: (state, action: PayloadAction<HomepageACF>) => {
      state.data = action.payload;
      state.loading = false;
    },
    setHomepageLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setHomepage, setHomepageLoading } = homepageSlice.actions;
export default homepageSlice.reducer;
