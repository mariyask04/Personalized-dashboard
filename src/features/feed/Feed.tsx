import ContentCard from "@/components/ui/ContentCard";
import { mockFeed } from "../feed/mockData";

export default function Feed() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Personalized Feed
        </h1>

        <button className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">
          Explore
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockFeed.map((item) => (
          <ContentCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}