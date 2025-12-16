import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./slices/pageSlice";
import menuReducer from "./slices/menuSlice";
import settingsReducer from "./slices/settingsSlice";
import homepageReducer from "./slices/homepageSlice";
import headerReducer from "./slices/headerSlice";
import footerReducer from "./slices/footerSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    settings: settingsReducer,
    pages: pageReducer,
     homepage: homepageReducer,
    header:headerReducer,
    footer:footerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

