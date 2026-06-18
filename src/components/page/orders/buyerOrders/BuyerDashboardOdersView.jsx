import { Typography, Stack } from "@mui/material";

import OrderCard from "../OrderCard";

import { useMyBuyerOrders } from "../../../../hooks/api/buyerOrders/buyerOrder.hooks";

export default function BuyerOrdersDashboardView({
  onSelectOrder,
}) {
  const {
    data: orders = [],
    isLoading,
    error,
  } = useMyBuyerOrders();

  if (isLoading) {
    return <Typography>Loading orders...</Typography>;
  }

  if (error) {
    return <Typography>Error loading orders</Typography>;
  }

  return (
    <>
      <Typography variant="h5" mb={2}>
        My Orders
      </Typography>

      <Stack spacing={2}>
        {orders.length === 0 ? (
          <Typography>No orders found</Typography>
        ) : (
          orders.map((order) => (
            <OrderCard
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