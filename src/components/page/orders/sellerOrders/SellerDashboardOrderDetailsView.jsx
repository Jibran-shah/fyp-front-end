import { Typography, Stack, Button } from "@mui/material";

import {
  useSellerOrder,
  useMarkAsProcessing,
  useMarkAsShipped,
  useMarkAsDelivered,
  useCancelSellerOrder,
} from "../../../../hooks/api/sellerOrders/sellerOrders.hooks";

export default function SellerOrderDetailDashboardView({
  orderId,
  onBack,
}) {
  const {
    data: order,
    isLoading,
    error,
  } = useSellerOrder(orderId);

  const {
    mutateAsync: markProcessing,
    isPending: isProcessing,
  } = useMarkAsProcessing();

  const {
    mutateAsync: markShipped,
    isPending: isShipped,
  } = useMarkAsShipped();

  const {
    mutateAsync: markDelivered,
    isPending: isDelivered,
  } = useMarkAsDelivered();

  const {
    mutateAsync: cancelOrder,
    isPending: isCanceling,
  } = useCancelSellerOrder();

  if (isLoading) {
    return (
      <Typography>
        Loading order...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography>
        Error loading order.
      </Typography>
    );
  }

  if (!order) {
    return (
      <Typography>
        Order not found.
      </Typography>
    );
  }

  const loading =
    isProcessing ||
    isShipped ||
    isDelivered ||
    isCanceling;

  return (
    <>
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

        <div>
          <Typography fontWeight={600}>
            Items
          </Typography>

          {order.items?.map((item, idx) => (
            <div
              key={item._id || idx}
            >
              {item.product?.name} ×{" "}
              {item.quantity}
            </div>
          ))}
        </div>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
        >
          <Button
            variant="outlined"
            disabled={loading}
            onClick={() =>
              markProcessing(order._id)
            }
          >
            Process
          </Button>

          <Button
            variant="outlined"
            disabled={loading}
            onClick={() =>
              markShipped(order._id)
            }
          >
            Ship
          </Button>

          <Button
            variant="contained"
            disabled={loading}
            onClick={() =>
              markDelivered(order._id)
            }
          >
            Deliver
          </Button>

          <Button
            color="error"
            variant="outlined"
            disabled={loading}
            onClick={() =>
              cancelOrder(order._id)
            }
          >
            Cancel
          </Button>

          <Button
            variant="outlined"
            onClick={onBack}
          >
            Back
          </Button>
        </Stack>
      </Stack>
    </>
  );
}