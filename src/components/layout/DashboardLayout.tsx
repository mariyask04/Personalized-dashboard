"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";

import { useEffect } from "react";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const darkMode = useSelector(
    (state: RootState) => state.theme.darkMode
  );

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
    }

  }, [darkMode]);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}