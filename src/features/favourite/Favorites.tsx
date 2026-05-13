"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import ContentCard from "@/components/ui/ContentCard";

export default function Favorites() {

  const favorites = useSelector(
    (state: RootState) => state.favorites.items
  );

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">
        Favorites
      </h2>

      {favorites.length === 0 ? (
        <p className="text-zinc-500">
          No favorites added yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {favorites.map((item) => (
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