import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { mockFeed } from "@/features/feed/MockData";

export interface FeedItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface FeedState {
  items: FeedItem[];
}

const initialState: FeedState = {
  items: mockFeed,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setFeed: (
      state,
      action: PayloadAction<FeedItem[]>
    ) => {
      state.items = action.payload;
    },
  },
});

export const { setFeed } = feedSlice.actions;

export default feedSlice.reducer;