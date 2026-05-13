import { createSlice } from "@reduxjs/toolkit";

interface PreferencesState {
  selectedCategory: string;
}

const initialState: PreferencesState = {
  selectedCategory: "all",
};

const preferencesSlice = createSlice({
  name: "preferences",

  initialState,

  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory =
        action.payload;
    },
  },
});

export const { setCategory } =
  preferencesSlice.actions;

export default preferencesSlice.reducer;