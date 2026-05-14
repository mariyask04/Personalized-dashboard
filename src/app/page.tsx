import DashboardLayout from "@/components/layout/DashboardLayout";
import Favorites from "@/features/favourite/Favorites";
import Feed from "@/features/feed/Feed";
import Trending from "@/features/trending/Trending";
import Movies from "@/features/movies/Movies";

export default function Home() {
  return (
    <DashboardLayout>
      <Trending />
      <Movies />
      <Feed />
      <Favorites />
    </DashboardLayout>
  );
}