import { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { Box } from "@mui/material";

import MasterDetailLayout from "../../components/common/layout/master-detail/MasterDetailLayout";

import DashboardHeader from "../../components/page/dashboard/DashboardHeader";
import DashboardStats from "../../components/page/dashboard/DashboardStats";

export default function ProviderDashboardPage() {
  const [selected, setSelected] = useState(null);

  const actions = [
    {
      label: "Create Service",
      path: "/services/create",
      description: "Add a new service listing",
    },
    {
      label: "My Services",
      path: "/provider/services",
      description: "Manage your services",
    },
    {
      label: "Bookings",
      path: "/provider/bookings",
      description: "View and manage bookings",
    },
    {
      label: "Chats",
      path: "/chats",
      icon: <ChatIcon />,
      description: "Talk with clients",
    },
    {
      label: "Profile",
      path: "/profile",
      description: "Manage your profile",
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
              selected?.label ||
              "Service Provider Dashboard"
            }
            name="John Doe"
            roles={["provider"]}
          />

          {/* Stats */}
          <DashboardStats
            title="Service Overview"
            stats={[
              { label: "Services", value: 0 },
              { label: "Bookings", value: 0 },
              { label: "Earnings", value: "₨0" },
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