"use client";

import { useEffect, useState } from "react";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import { setFeed } from "@/features/feedSlice";

import SortableCard from "./SortableCard";

export default function Feed() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dispatch = useDispatch();

  const query = useSelector(
    (state: RootState) => state.search.query
  );

  const feed = useSelector(
    (state: RootState) => state.feed.items
  );

  const filteredFeed = feed.filter((item) => {
    const search = query.toLowerCase();

    return (
      item.title.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
    );
  });

  function handleDragEnd(event: any) {

    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = feed.findIndex(
      (item) => item.id === active.id
    );

    const newIndex = feed.findIndex(
      (item) => item.id === over.id
    );

    const newFeed = arrayMove(
      feed,
      oldIndex,
      newIndex
    );

    dispatch(setFeed(newFeed));
  }

  if (!mounted) return null;

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
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={filteredFeed.map(
              (item) => item.id
            )}
            strategy={rectSortingStrategy}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredFeed.map((item) => (
                <SortableCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}