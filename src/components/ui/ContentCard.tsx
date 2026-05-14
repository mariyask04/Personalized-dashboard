"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import {
  toggleFavorite,
} from "../../features/favoritesSlice";

import { toast } from "react-hot-toast";
import Image from "next/image";

interface Props {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  url: string;
}

export default function ContentCard({
  id,
  title,
  description,
  image,
  category,
  url,
}: Props) {

  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.favorites.items
  );

  const isFavorite = favorites.some(
    (item) => item.id === id
  );

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800"
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-52 object-contain"
      />

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">
            {category}
          </span>

          <button
            onClick={() => {

              dispatch(
                toggleFavorite({
                  id,
                  title,
                  description,
                  image,
                  category,
                  url,
                })
              );

              toast.success(
                isFavorite
                  ? "Removed from favorites"
                  : "Added to favorites"
              );
            }}
            className={`transition ${isFavorite
              ? "text-red-500"
              : "hover:text-red-500"
              }`}
          >
            <Heart
              size={20}
              fill={isFavorite ? "currentColor" : "none"}
            />
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
          {description}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-medium"
        >
          Read More
        </a>
      </div>
    </motion.div>
  );
}