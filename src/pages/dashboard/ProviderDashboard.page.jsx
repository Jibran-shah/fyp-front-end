
import ChatIcon from "@mui/icons-material/Chat";
import DashboardLayout from "../../components/page/dashboard/Dashboard.layout";
import DashboardActions from "../../components/page/dashboard/DashboardActions";
import DashboardHeader from "../../components/page/dashboard/DashboardHeader";
import DashboardStats from "../../components/page/dashboard/DashboardStats";

export default function ProviderDashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHeader
        title="Service Provider Dashboard"
        name="John Doe"
        roles={["provider"]}
      />

      <DashboardStats
        title="Service Overview"
        stats={[
          { label: "Services", value: 0 },
          { label: "Bookings", value: 0 },
          { label: "Earnings", value: "₨0" },
        ]}
      />

      <DashboardActions
        actions={[
          { label: "Create Service", path: "/services/create" },
          { label: "My Services", path: "/provider/services" },
          { label: "Bookings", path: "/provider/bookings" },
          { label: "Chats", path: "/chats", icon: <ChatIcon /> },
          { label: "Profile", path: "/profile" },
        ]}
      />
    </DashboardLayout>
  );
}