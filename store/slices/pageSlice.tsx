import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PageBlock } from "@/lib/types";

interface PageState {
  slug: string;
content: PageBlock[];
}

const initialState: PageState = {
  slug: "",
  content: [],
};

const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPageContent: (
      state,
      action: PayloadAction<{ slug: string; content: PageBlock[] }>
    ) => {
      state.slug = action.payload.slug;
      state.content = action.payload.content;
    },
  },
});

export const { setPageContent } = pageSlice.actions;
export default pageSlice.reducer;

