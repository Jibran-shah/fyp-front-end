import { Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import OrderCard from "../../components/orders/OrderCard";
import PageContainer from "../../components/common/PageContainer";

export default function BuyerOrdersPage() {
  const navigate = useNavigate();

  const orders = [];

  return (
    <PageContainer>
      <Typography variant="h5" mb={2}>
        My Orders
      </Typography>

      <Stack spacing={2}>
        {orders.map((order) => (
          <OrderCard
            key={order._id}
            order={order}
            onClick={() => navigate(`/orders/${order._id}`)}
          />
        ))}
      </Stack>
    </PageContainer>
  );
}