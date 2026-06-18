import { Typography, Stack } from "@mui/material";

import SellerOrderCard from "./SellerOrderCard";

import { useMySellerOrders } from "../../../../hooks/api/sellerOrders/sellerOrders.hooks";

export default function SellerOrdersDashboardView({
  onSelectOrder,
}) {
  const {
    data: orders = [],
    isLoading,
    error,
  } = useMySellerOrders();

  if (isLoading) {
    return (
      <Typography>
        Loading orders...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography>
        Error loading orders.
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h5" mb={2}>
        My Seller Orders
      </Typography>

      <Stack spacing={2}>
        {orders.length === 0 ? (
          <Typography color="text.secondary">
            No seller orders found.
          </Typography>
        ) : (
          orders.map((order) => (
            <SellerOrderCard
              key={order._id}
              order={order}
              onClick={() =>
                onSelectOrder(order._id)
              }
            />
          ))
        )}
      </Stack>
    </>
  );
}