
import ChatIcon from "@mui/icons-material/Chat";
import DashboardStats from "../../components/page/dashboard/DashboardStats";
import DashboardActions from "../../components/page/dashboard/DashboardActions";
import DashboardHeader from "../../components/page/dashboard/DashboardHeader";
import DashboardLayout from "../../components/page/dashboard/Dashboard.layout";

export default function SellerDashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHeader
        title="Seller Dashboard"
        name="John Doe"
        roles={["seller"]}
      />

      <DashboardStats
        title="Business Overview"
        stats={[
          { label: "Products", value: 0 },
          { label: "Orders", value: 0 },
          { label: "Revenue", value: "₨0" },
        ]}
      />

      <DashboardActions
        actions={[
          { label: "Add Product", path: "/products/create" },
          { label: "My Products", path: "/seller/products" },
          { label: "Orders", path: "/seller/orders" },
          { label: "Chats", path: "/chats", icon: <ChatIcon /> },
          { label: "Profile", path: "/profile" },
        ]}
      />
    </DashboardLayout>
  );
}