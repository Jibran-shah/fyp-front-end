import { Typography, Stack, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageContainer from "../../components/common/PageContainer";

export default function BuyerOrderDetailPage() {
  const navigate = useNavigate();

  const order = null;

  if (!order) {
    return (
      <PageContainer>
        <Typography>Loading order...</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
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
          Payment: {order.paymentTransaction || "Pending"}
        </Typography>

        {/* ITEMS */}
        <Box>
          <Typography variant="h6">Items</Typography>

          {order.items.map((item, idx) => (
            <Box key={idx}>
              {item.name} x {item.quantity}
            </Box>
          ))}
        </Box>

        {/* ACTIONS */}
        {order.status === "PENDING" && (
          <Button color="error" variant="contained">
            Cancel Order
          </Button>
        )}

        <Button
          variant="outlined"
          onClick={() => navigate("/orders/my")}
        >
          Back
        </Button>
      </Stack>
    </PageContainer>
  );
}