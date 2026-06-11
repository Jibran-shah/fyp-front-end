import ChatIcon from "@mui/icons-material/Chat";
import DashboardLayout from "../../components/page/dashboard/Dashboard.layout";
import DashboardActions from "../../components/page/dashboard/DashboardActions";
import DashboardHeader from "../../components/page/dashboard/DashboardHeader";
import DashboardStats from "../../components/page/dashboard/DashboardStats";

export default function BuyerDashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHeader
        title="Buyer Dashboard"
        name="John Doe"
        roles={["buyer"]}
      />

      <DashboardStats
        title="Overview"
        stats={[
          { label: "Orders", value: 0 },
          { label: "Wishlist", value: 0 },
          { label: "Messages", value: 0 },
        ]}
      />

      <DashboardActions
        actions={[
          { label: "Browse Products", path: "/products" },
          { label: "Cart", path: "/cart" },
          { label: "Orders", path: "/buyer/orders" },
          { label: "Chats", path: "/chats", icon: <ChatIcon /> },
          { label: "Profile", path: "/profile" },
        ]}
      />
    </DashboardLayout>
  );
}