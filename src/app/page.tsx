import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm h-52">
          News Section
        </div>

        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm h-52">
          Trending Section
        </div>

        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm h-52">
          Favorites Section
        </div>

      </div>

    </DashboardLayout>
  );
}