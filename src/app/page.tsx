import DashboardLayout from "@/components/layout/DashboardLayout";
import Favorites from "@/features/favourite/Favorites";
import Feed from "@/features/feed/Feed";

export default function Home() {
  return (
    <DashboardLayout>
      <Feed />
      <Favorites/>
    </DashboardLayout>
  );
}