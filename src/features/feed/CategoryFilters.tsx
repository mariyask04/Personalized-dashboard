"use client";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import { setCategory } from "@/features/preferencesSlice";

import { getNews } from "@/features/feedSlice";

const categories = [
    "all",
    "technology",
    "sports",
    "business",
    "entertainment",
    "health",
    "science",
];

export default function CategoryFilters() {

    const dispatch = useDispatch<any>();

    const selectedCategory = useSelector(
        (state: RootState) =>
            state.preferences.selectedCategory
    );

    const handleCategoryClick = (
        category: string
    ) => {

        dispatch(setCategory(category));

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex flex-wrap gap-3 mb-8">

            {categories.map((category) => (

                <button
                    key={category}
                    onClick={() =>
                        handleCategoryClick(category)
                    }
                    className={`px-4 py-2 rounded-full capitalize transition ${selectedCategory === category
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-zinc-200 dark:bg-zinc-800"
                        }`}
                >
                    {category}
                </button>

            ))}
        </div>
    );
}