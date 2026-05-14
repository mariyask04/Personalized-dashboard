import axios from "axios";

export const fetchNews = async (category: string, page: number) => {
  const response = await axios.get("/api/news", {
    params: {
      category,
      page,
    },
  });

  return response.data.articles;
};