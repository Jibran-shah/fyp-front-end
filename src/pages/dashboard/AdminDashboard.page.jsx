import { useState } from "react";
import ReportIcon from "@mui/icons-material/Report";
import StoreIcon from "@mui/icons-material/Store";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PersonIcon from "@mui/icons-material/Person";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Box } from "@mui/material";

import MasterDetailLayout from "../../components/common/layout/MasterDetailLayout";

import DashboardHeader from "../../components/page/dashboard/DashboardHeader";
import DashboardStats from "../../components/page/dashboard/DashboardStats";

export default function AdminDashboardPage() {
  const [selected, setSelected] = useState(null);

  const actions = [
    // REPORTS SECTION
    {
      label: "All Reports",
      icon: <ReportIcon />,
      description: "View all user-submitted reports",
    },
    {
      label: "Product Reports",
      icon: <StoreIcon />,
      description: "Reports related to products (fake, spam, abuse)",
    },
    {
      label: "Service Reports",
      icon: <MiscellaneousServicesIcon />,
      description: "Reports related to services",
    },
    {
      label: "Provider Reports",
      icon: <PersonIcon />,
      description: "Reports against service providers",
    },
    {
      label: "Seller Reports",
      icon: <PersonIcon />,
      description: "Reports against product sellers",
    },

    // FINANCE SECTION
    {
      label: "Withdraw Requests",
      icon: <PaymentsIcon />,
      description: "Handle payout requests from sellers & providers",
    },
    {
      label: "Wallet Transactions",
      icon: <AccountBalanceWalletIcon />,
      description: "All platform wallet movements & admin transfers",
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
              selected?.label || "Admin Dashboard"
            }
            name="Admin"
            roles={["admin"]}
          />

          {/* Stats */}
          <DashboardStats
            title="Platform Overview"
            stats={[
              { label: "Reports", value: 0 },
              { label: "Withdrawals", value: 0 },
              { label: "Transactions", value: 0 },
              { label: "Users", value: 0 },
            ]}
          />

          {/* Selected section description */}
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