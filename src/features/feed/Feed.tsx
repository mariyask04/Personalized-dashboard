"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import ContentCard from "@/components/ui/ContentCard";

import { mockFeed } from "./MockData";

export default function Feed() {

  const query = useSelector(
    (state: RootState) => state.search.query
  );

  const filteredFeed = mockFeed.filter((item) => {
    const search = query.toLowerCase();

    return (
      item.title.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
    );
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Personalized Feed
        </h1>

        <button className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">
          Explore
        </button>
      </div>

      {filteredFeed.length === 0 ? (
        <div className="bg-white dark:bg-zinc-900 p-10 rounded-2xl text-center border border-zinc-200 dark:border-zinc-800">
          No content found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredFeed.map((item) => (
            <ContentCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
            />
          ))}
        </div>
      )}
    </div>
  );
}