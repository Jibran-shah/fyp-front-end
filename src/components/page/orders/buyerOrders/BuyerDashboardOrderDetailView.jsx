import {
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";

import {
  useBuyerOrder,
  useCancelBuyerOrder,
} from "../../../../hooks/api/buyerOrders/buyerOrder.hooks";

import PaymentTransactionCard from "../../payments/PaymentTransactionCard"

export default function BuyerOrderDetailDashboardView({
  orderId,
  onBack,
}) {
  const {
    data: order,
    isLoading,
    error,
  } = useBuyerOrder(orderId);

  const {
    mutateAsync: cancelOrder,
    isPending: isCancelling,
  } = useCancelBuyerOrder();

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
        Error loading order
      </Typography>
    );
  }

  if (!order) {
    return (
      <Typography>
        No order found
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h5">
        Order Details
      </Typography>

      <Stack spacing={2} mt={2}>
        <Typography>
          Status: {order.status}
        </Typography>

        <Typography>
          Total: {order.totalAmount}
        </Typography>


        <Typography>
          Payment:{" "}
          
          { <PaymentTransactionCard payment={order.paymentTransaction} />||
            "Pending"}
        </Typography>

        <Box>
          <Typography variant="h6">
            Items
          </Typography>

          {order.items?.map((item, idx) => (
            <Box key={idx}>
              {item.name} × {item.quantity}
            </Box>
          ))}
        </Box>

        {order.status === "PENDING" && (
          <Button
            color="error"
            variant="contained"
            disabled={isCancelling}
            onClick={() =>
              cancelOrder(orderId)
            }
          >
            Cancel Order
          </Button>
        )}

        <Button
          variant="outlined"
          onClick={onBack}
        >
          Back to Orders
        </Button>
      </Stack>
    </>
  );
}