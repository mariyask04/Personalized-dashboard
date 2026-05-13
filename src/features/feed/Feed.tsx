"use client";

import CategoryFilters from "./CategoryFilters";

import {
  useEffect,
  useState,
} from "react";

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

import {
  getNews,
  setFeed,
} from "@/features/feedSlice";

import SortableCard from "./SortableCard";

export default function Feed() {

  const [mounted, setMounted] =
    useState(false);

  const dispatch = useDispatch<any>();

  const query = useSelector(
    (state: RootState) => state.search.query
  );

  const {
    items,
    loading,
    error,
  } = useSelector(
    (state: RootState) => state.feed
  );

  useEffect(() => {
    setMounted(true);

    dispatch(getNews("all"));
  }, [dispatch]);

  if (!mounted) return null;

  const filteredFeed = items.filter((item) => {

    const search = query.toLowerCase();

    return (
      item.title
        .toLowerCase()
        .includes(search) ||

      item.category
        .toLowerCase()
        .includes(search) ||

      item.description
        .toLowerCase()
        .includes(search)
    );
  });

  function handleDragEnd(event: any) {

    const { active, over } = event;

    if (!over || active.id === over.id)
      return;

    const oldIndex = items.findIndex(
      (item) => item.id === active.id
    );

    const newIndex = items.findIndex(
      (item) => item.id === over.id
    );

    const newFeed = arrayMove(
      items,
      oldIndex,
      newIndex
    );

    dispatch(setFeed(newFeed));
  }

  return (
    <div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-6">
          Personalized Feed
        </h1>

        <CategoryFilters />
      </div>

      {loading && (
        <div className="text-center py-20">
          Loading content...
        </div>
      )}

      {error && (
        <div className="text-red-500 py-10">
          {error}
        </div>
      )}

      {!loading &&
        !error &&
        filteredFeed.length === 0 && (
          <div className="bg-white dark:bg-zinc-900 p-10 rounded-2xl text-center border border-zinc-200 dark:border-zinc-800">
            No content found.
          </div>
        )}

      {!loading &&
        !error &&
        filteredFeed.length > 0 && (
          <DndContext
            collisionDetection={
              closestCenter
            }
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={filteredFeed.map(
                (item) => item.id
              )}
              strategy={
                rectSortingStrategy
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {filteredFeed.map(
                  (item) => (
                    <SortableCard
                      key={item.id}
                      item={item}
                    />
                  )
                )}

              </div>
            </SortableContext>
          </DndContext>
        )}
    </div>
  );
}