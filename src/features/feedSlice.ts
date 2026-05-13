import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import { fetchNews } from "@/services/newsApi";

export interface FeedItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  url: string;
}

interface FeedState {
  items: FeedItem[];
  loading: boolean;
  error: string | null;
}

const initialState: FeedState = {
  items: [],
  loading: false,
  error: null,
};

export const getNews = createAsyncThunk(
  "feed/getNews",

  async (category: string) => {

    const articles = await fetchNews(category);

    return articles.map(
      (article: any, index: number) => ({
        id: index + 1,
        title: article.title,
        description:
          article.description ||
          "No description available.",
        image:
          article.urlToImage ||
          "https://via.placeholder.com/400",
        category:
          category === "all"
            ? article.source?.name || "General"
            : category,
        url: article.url,
      })
    );
  }
);

const feedSlice = createSlice({
  name: "feed",
  initialState,

  reducers: {
    setFeed: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {

    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getNews.fulfilled, (
        state,
        action
      ) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(getNews.rejected, (
        state
      ) => {
        state.loading = false;
        state.error =
          "Failed to fetch news.";
      });
  },
});

export const { setFeed } =
  feedSlice.actions;

export default feedSlice.reducer;