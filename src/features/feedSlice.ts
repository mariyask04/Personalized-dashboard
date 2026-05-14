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
  page: number;
}

const initialState: FeedState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
};

export const getNews = createAsyncThunk(
  "feed/getNews",

  async (
    {
      category,
      page,
    }: {
      category: string;
      page: number;
    }
  ) => {

    try {

      const articles = await fetchNews(
        category,
        page
      );

      return articles.map(
        (article: {
          title: string;
          description: string;
          urlToImage: string;
          url: string;
          source?: {
            name?: string;
          };
        }, index: number) => ({
          id: page * 100 + index,

          title:
            article.title || "No Title",

          description:
            article.description ||
            "No description available.",

          image:
            article.urlToImage ||
            "https://via.placeholder.com/400",

          category:
            category === "all"
              ? article.source?.name ||
              "General"
              : category,

          url:
            article.url || "#",
        })
      );

    } catch {

      return [
        {
          id: page * 100 + 1,

          title:
            "Demo Content Available",

          description:
            "NewsAPI rate limit reached. Showing fallback dashboard content.",

          image:
            "https://via.placeholder.com/400",

          category,

          url: "#",
        },
      ];
    }
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
        if (action.meta.arg.page === 1) {
          state.items = action.payload;
        } else {
          state.items = [
            ...state.items,
            ...action.payload,
          ];
        }
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