import { Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import SellerOrderCard from "../../components/sellerOrders/SellerOrderCard";
import PageContainer from "../../components/common/PageContainer";

import { useMySellerOrders } from "../../../hooks/api/sellerOrders/sellerOrder.hooks";

export default function SellerOrdersPage() {
  const navigate = useNavigate();

  const {
    data: orders = [],
    isLoading,
    error,
  } = useMySellerOrders();

  if (isLoading) {
    return (
      <PageContainer>
        <Typography>Loading orders...</Typography>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <Typography>Error loading orders.</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
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
                navigate(`/seller-orders/${order._id}`)
              }
            />
          ))
        )}
      </Stack>
    </PageContainer>
  );
}