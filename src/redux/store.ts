import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "../features/themeSlice";
import preferencesReducer from "../features/preferencesSlice";
import favoritesReducer from "../features/favoritesSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    preferences: preferencesReducer,
    favorites: favoritesReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch = typeof store.dispatch;