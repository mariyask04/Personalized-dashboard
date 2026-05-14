import { combineReducers, configureStore } from "@reduxjs/toolkit";

import themeReducer from "../features/themeSlice";
import preferencesReducer from "../features/preferencesSlice";
import favoritesReducer from "../features/favoritesSlice";
import searchReducer from "../features/searchSlice";
import feedReducer from "../features/feedSlice";

import {
  loadState,
  saveState,
} from "@/utils/localStorage";

const persistedState =
  typeof window !== "undefined"
    ? loadState()
    : undefined;

const rootReducer = combineReducers({
  theme: themeReducer,
  preferences: preferencesReducer,
  favorites: favoritesReducer,
  search: searchReducer,
  feed: feedReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    theme: store.getState().theme,
    favorites: store.getState().favorites,
    preferences: store.getState().preferences,
    search: store.getState().search,
    feed: store.getState().feed,
  });
});

export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch = typeof store.dispatch;