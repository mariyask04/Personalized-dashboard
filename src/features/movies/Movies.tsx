"use client";

import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import { fetchTrendingMovies } from "@/services/tmdbApi";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export default function Movies() {

  const [movies, setMovies] =
    useState<Movie[]>([]);

  useEffect(() => {

    const loadMovies =
      async () => {

        try {

          const data =
            await fetchTrendingMovies();

          setMovies(data);

        } catch (error: unknown) {
          console.log(error);
        }
      };

    loadMovies();

  }, []);

  return (
    <div className="mb-12">

      <h2 className="text-2xl font-bold mb-6">
        Trending Movies
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">

        {movies.slice(0, 10).map(
          (movie) => (

            <motion.div
              key={movie.id}
              whileHover={{
                scale: 1.03,
              }}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
            >

              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={700}
                className="h-72 w-full object-contain"
              />

              <div className="p-4">

                <h3 className="font-semibold line-clamp-2 mb-2">
                  {movie.title}
                </h3>

                <p className="text-sm text-zinc-500">
                  ⭐ {movie.vote_average}
                </p>

              </div>
            </motion.div>

          )
        )}

      </div>
    </div>
  );
}