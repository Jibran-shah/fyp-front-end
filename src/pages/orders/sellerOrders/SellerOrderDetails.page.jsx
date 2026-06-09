import { Typography, Stack, Button } from "@mui/material";
import PageContainer from "../../components/common/PageContainer";

export default function SellerOrderDetailPage() {
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

          {order.items.map((item, idx) => (
            <div key={idx}>
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