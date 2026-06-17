import { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { Box } from "@mui/material";

import MasterDetailLayout from "../../components/common/layout/master-detail/MasterDetailLayout";

import DashboardHeader from "../../components/page/dashboard/DashboardHeader";
import DashboardStats from "../../components/page/dashboard/DashboardStats";

export default function SellerDashboardPage() {
  const [selected, setSelected] = useState(null);

  const actions = [
    {
      label: "Add Product",
      path: "/products/create",
      description: "Create a new product listing",
    },
    {
      label: "My Products",
      path: "/seller/products",
      description: "Manage your product inventory",
    },
    {
      label: "Orders",
      path: "/seller/orders",
      description: "View customer orders",
    },
    {
      label: "Chats",
      path: "/chats",
      icon: <ChatIcon />,
      description: "Communicate with buyers",
    },
    {
      label: "Profile",
      path: "/profile",
      description: "Manage your seller profile",
    },
  ];

  return (
    <MasterDetailLayout
      hasSelection={!!selected}
      sidebar={(openMain) => (
        <DashboardActions
          actions={actions}
          onSelectAction={(item) => {
            setSelected(item);
            openMain?.();
          }}
        />
      )}
      main={
        <Box sx={{ p: 2 }}>
          {/* Header */}
          <DashboardHeader
            title={
              selected?.label || "Seller Dashboard"
            }
            name="John Doe"
            roles={["seller"]}
          />

          {/* Stats */}
          <DashboardStats
            title="Business Overview"
            stats={[
              { label: "Products", value: 0 },
              { label: "Orders", value: 0 },
              { label: "Revenue", value: "₨0" },
            ]}
          />

          {/* Optional selected description */}
          {selected?.description && (
            <Box
              sx={{
                mt: 2,
                color: "text.secondary",
              }}
            >
              {selected.description}
            </Box>
          )}
        </Box>
      }
    />
  );
}