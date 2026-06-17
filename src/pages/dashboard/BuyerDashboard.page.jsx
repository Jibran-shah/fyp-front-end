import { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { Box } from "@mui/material";

import MasterDetailLayout from "../../components/common/layout/master-detail/MasterDetailLayout";

import DashboardActions from "../../components/page/dashboard/DashboardActions";
import DashboardHeader from "../../components/page/dashboard/DashboardHeader";
import DashboardStats from "../../components/page/dashboard/DashboardStats";

export default function BuyerDashboardPage() {
  const [selected, setSelected] = useState(null);

  const actions = [
    {
      label: "Browse Products",
      path: "/products",
      description: "Explore available products",
    },
    {
      label: "Cart",
      path: "/cart",
      description: "Items in your cart",
    },
    {
      label: "Orders",
      path: "/buyer/orders",
      description: "Your order history",
    },
    {
      label: "Chats",
      path: "/chats",
      icon: <ChatIcon />,
      description: "Messages with buyers/sellers",
    },
    {
      label: "Profile",
      path: "/profile",
      description: "Manage your account",
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
            title={selected?.label || "Buyer Dashboard"}
            name="John Doe"
            roles={["buyer"]}
          />

          {/* Stats always shown (or you can make dynamic later) */}
          <DashboardStats
            title="Overview"
            stats={[
              { label: "Orders", value: 0 },
              { label: "Wishlist", value: 0 },
              { label: "Messages", value: 0 },
            ]}
          />

          {/* Optional description */}
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