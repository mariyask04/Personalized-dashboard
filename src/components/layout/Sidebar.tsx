"use client";

import Link from "next/link";

import {
  Home,
  Flame,
  Heart,
} from "lucide-react";

const menuItems = [
  {
    title: "Feed",
    icon: Home,
    href: "/",
  },
  {
    title: "Trending",
    icon: Flame,
    href: "/#trending",
  },
  {
    title: "Favorites",
    icon: Heart,
    href: "/#favorites",
  },
];

export default function Sidebar() {

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-5">

      <h1 className="text-2xl font-bold mb-10">
        Dashboard
      </h1>

      <nav className="space-y-3">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}