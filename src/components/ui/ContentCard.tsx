"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface Props {
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function ContentCard({
  title,
  description,
  image,
  category,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">
            {category}
          </span>

          <button className="hover:text-red-500 transition">
            <Heart size={20} />
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
          {description}
        </p>

        <button className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-medium">
          Read More
        </button>
      </div>
    </motion.div>
  );
}