import { Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import SellerOrderCard from "../../components/sellerOrders/SellerOrderCard";
import PageContainer from "../../components/common/PageContainer";

export default function SellerOrdersPage() {
  const navigate = useNavigate();

  const orders = [];

  return (
    <PageContainer>
      <Typography variant="h5" mb={2}>
        My Seller Orders
      </Typography>

      <Stack spacing={2}>
        {orders.map((order) => (
          <SellerOrderCard
            key={order._id}
            order={order}
            onClick={() =>
              navigate(`/seller-orders/${order._id}`)
            }
          />
        ))}
      </Stack>
    </PageContainer>
  );
}