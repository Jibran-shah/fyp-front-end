import { Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import OrderCard from "../../components/orders/OrderCard";
import PageContainer from "../../components/common/PageContainer";

import { useMyBuyerOrders } from "../../../hooks/api/buyerOrders/buyerOrder.hooks";

export default function BuyerOrdersPage() {
  const navigate = useNavigate();

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
    <PageContainer>
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
              onClick={() => navigate(`/buyer/orders/${order._id}`)}
            />
          ))
        )}
      </Stack>
    </PageContainer>
  );
}