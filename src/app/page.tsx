import DashboardLayout from "@/components/layout/DashboardLayout";
import Feed from "@/features/feed/Feed";

export default function Home() {
  return (
    <DashboardLayout>
      <Feed />
    </DashboardLayout>
  );
}