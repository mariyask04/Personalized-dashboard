import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "../features/themeSlice";
import preferencesReducer from "../features/preferencesSlice";
import favoritesReducer from "../features/favoritesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    preferences: preferencesReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch = typeof store.dispatch;