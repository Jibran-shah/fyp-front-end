import { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { Box } from "@mui/material";

import MasterDetailLayout from "../../components/common/layout/master-detail/MasterDetailLayout";

import DashboardActions from "../../components/page/dashboard/DashboardActions";
import DashboardHeader from "../../components/page/dashboard/DashboardHeader";
import DashboardStats from "../../components/page/dashboard/DashboardStats";

import BuyerCartDashboardView from "../../components/page/dashboard/BuyerDashboardCartView";

import BuyerOrdersDashboardView from "../../components/page/orders/buyerOrders/BuyerDashboardOdersView";
import BuyerOrderDetailDashboardView from "../../components/page/orders/buyerOrders/BuyerDashboardOrderDetailView";

export default function BuyerDashboardPage() {
  const [selected, setSelected] = useState(null);
  const [selectedOrderId, setSelectedOrderId] =
    useState(null);

  const actions = [
    {
      label: "Browse Products",
      path: "/products",
      description: "Explore available products",
    },
    {
      label: "Cart",
      description: "Items in your cart",
      component: <BuyerCartDashboardView />,
    },
    {
      label: "Orders",
      description: "Your order history",
      component: (
        <BuyerOrdersDashboardView
          onSelectOrder={(orderId) =>
            setSelectedOrderId(orderId)
          }
        />
      ),
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
      hasSelection={
        !!selected || !!selectedOrderId
      }
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
          {selectedOrderId ? (
            <BuyerOrderDetailDashboardView
              orderId={selectedOrderId}
              onBack={() =>
                setSelectedOrderId(null)
              }
            />
          ) : selected?.component ? (
            selected.component
          ) : (
            <>
              <DashboardHeader
                title="Buyer Dashboard"
                name="John Doe"
                roles={["buyer"]}
              />

              <DashboardStats
                title="Overview"
                stats={[
                  {
                    label: "Orders",
                    value: 0,
                  },
                  {
                    label: "Wishlist",
                    value: 0,
                  },
                  {
                    label: "Messages",
                    value: 0,
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