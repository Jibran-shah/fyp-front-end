import { Typography, Stack, Button } from "@mui/material";
import { useParams } from "react-router-dom";

import PageContainer from "../../components/common/PageContainer";
import { useSellerOrder } from "../../../hooks/api/sellerOrders/sellerOrder.hooks";

export default function SellerOrderDetailPage() {
  const { id } = useParams();

  const {
    data: order,
    isLoading,
    error,
  } = useSellerOrder(id);

  if (isLoading) {
    return (
      <PageContainer>
        <Typography>Loading order...</Typography>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <Typography>Error loading order.</Typography>
      </PageContainer>
    );
  }

  if (!order) {
    return (
      <PageContainer>
        <Typography>Order not found.</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Typography variant="h5">
        Seller Order Details
      </Typography>

      <Stack spacing={2} mt={2}>
        <Typography>
          Status: {order.status}
        </Typography>

        <Typography>
          Total: {order.totalAmount}
        </Typography>

        <Typography>
          Buyer: {order.buyer?.name}
        </Typography>

        {/* ITEMS */}
        <div>
          <Typography fontWeight={600}>
            Items
          </Typography>

          {order.items?.map((item, idx) => (
            <div key={item._id || idx}>
              {item.product?.name} × {item.quantity}
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Button variant="outlined">
            Process
          </Button>

          <Button variant="outlined">
            Ship
          </Button>

          <Button variant="contained">
            Deliver
          </Button>

          <Button color="error" variant="outlined">
            Cancel
          </Button>
        </Stack>
      </Stack>
    </PageContainer>
  );
}