import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category") || "all";
  const page = searchParams.get("page") || "1";

  const apiKey = process.env.NEWS_API_KEY;

  const url =
    category === "all"
      ? `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=9&apiKey=${apiKey}`
      : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=9&apiKey=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}