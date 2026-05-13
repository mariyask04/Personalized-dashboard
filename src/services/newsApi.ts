import axios from "axios";

const API_KEY =
  process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const fetchNews = async (
  category: string
) => {

  const url =
    category === "all"
      ? `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

  const response = await axios.get(url);

  return response.data.articles;
};