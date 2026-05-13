"use client";

import {
    Bell,
    Moon,
    Search,
    Sun,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { toggleTheme } from "../../features/themeSlice";

export default function Header() {
    const dispatch = useDispatch();

    const darkMode = useSelector(
        (state: RootState) => state.theme.darkMode
    );

    return (
        <header className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">

            <div className="flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-xl w-full max-w-md">
                <Search size={18} />

                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none w-full"
                />
            </div>

            <div className="flex items-center gap-4 ml-4">

                <button
                    onClick={() => {
                        dispatch(toggleTheme());

                        document.documentElement.classList.toggle("dark");
                    }}
                    className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                    {darkMode ? (
                        <Sun size={20} />
                    ) : (
                        <Moon size={20} />
                    )}
                </button>

                <button className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <Bell size={20} />
                </button>

                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">
                    M
                </div>
            </div>
        </header>
    );
}