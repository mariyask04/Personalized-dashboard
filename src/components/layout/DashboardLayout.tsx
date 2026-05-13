"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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