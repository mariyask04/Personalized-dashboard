import { NextResponse } from "next/server";

export async function GET() {

  const apiKey =
    process.env.NEWS_API_KEY;

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=9&apiKey=${apiKey}`
  );

  const data = await res.json();

  return NextResponse.json(data);
}