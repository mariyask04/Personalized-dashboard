"use client";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { useState, useEffect } from "react";

export default function Trending() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = useSelector(
    (state: RootState) =>
      state.feed.items
  );

  const trendingItems = items.slice(0, 5);

  if (!mounted) return null;

  return (
    <div className="mb-12">

      <h2 className="text-2xl font-bold mb-6">
        Trending Now
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

        {trendingItems.map((item) => (

          <motion.div
            key={item.id}
            whileHover={{
              scale: 1.03,
            }}
            className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
          >

            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-contain"
            />

            <div className="p-4">

              <p className="text-xs uppercase text-zinc-500 mb-2">
                {item.category}
              </p>

              <h3 className="font-semibold line-clamp-2">
                {item.title}
              </h3>

            </div>
          </motion.div>

        ))}

      </div>
    </div>
  );
}