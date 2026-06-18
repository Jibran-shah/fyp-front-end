import { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { Box } from "@mui/material";

import MasterDetailLayout from "../../components/common/layout/master-detail/MasterDetailLayout";

import DashboardActions from "../../components/page/dashboard/DashboardActions";
import DashboardHeader from "../../components/page/dashboard/DashboardHeader";
import DashboardStats from "../../components/page/dashboard/DashboardStats";

/* ORDERS */
import SellerOrdersDashboardView from "../../components/page/orders/sellerOrders/SellerDashboardOrdersView";
import SellerOrderDetailDashboardView from "../../components/page/orders/sellerOrders/SellerDashboardOrderDetailsView";

/* WALLET */
import SellerWalletDashboardView from "../../components/page/wallet/WalletDashboardView";

/* PRODUCTS */
import SellerProductsDashboardView from "../../components/page/products/SellerProductsDashboardView";

export default function SellerDashboardPage() {
  const [selected, setSelected] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const actions = [
    {
      label: "Add Product",
      path: "/products/create",
      description: "Create a new product listing",
    },
    {
      label: "My Products",
      description: "Manage your product inventory",
      component: <SellerProductsDashboardView />,
    },
    {
      label: "Orders",
      description: "View customer orders",
      component: (
        <SellerOrdersDashboardView
          onSelectOrder={(id) =>
            setSelectedOrderId(id)
          }
        />
      ),
    },
    {
      label: "Wallet",
      description: "Manage earnings & withdrawals",
      component: <SellerWalletDashboardView />,
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
      hasSelection={!!selected || !!selectedOrderId}
      sidebar={(openMain) => (
        <DashboardActions
          actions={actions}
          onSelectAction={(item) => {
            setSelectedOrderId(null);
            setSelected(item);
            openMain?.();
          }}
        />
      )}
      main={
        <Box sx={{ p: 2 }}>
          {/* ORDER DETAIL (highest priority) */}
          {selectedOrderId ? (
            <SellerOrderDetailDashboardView
              orderId={selectedOrderId}
              onBack={() => setSelectedOrderId(null)}
            />
          ) : selected?.component ? (
            selected.component
          ) : (
            <>
              <DashboardHeader
                title="Seller Dashboard"
                name="John Doe"
                roles={["seller"]}
              />

              <DashboardStats
                title="Business Overview"
                stats={[
                  {
                    label: "Products",
                    value: 0,
                  },
                  {
                    label: "Orders",
                    value: 0,
                  },
                  {
                    label: "Revenue",
                    value: "₨0",
                  },
                ]}
              />
            </>
          )}
        </Box>
      }
    />
  );
}