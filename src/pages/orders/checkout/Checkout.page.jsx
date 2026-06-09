import { Typography, Paper, Button, Stack } from "@mui/material";
import PageContainer from "../../components/common/PageContainer";

export default function CheckoutPage() {
  return (
    <PageContainer>
      <Typography variant="h5" mb={2}>
        Checkout
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1">
          Order Summary
        </Typography>

        <Typography>
          Total: 3500
        </Typography>
      </Paper>

      <Stack spacing={2}>
        <Typography variant="subtitle2">
          Select Payment Method
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="outlined">COD</Button>
          <Button variant="outlined">Card</Button>
          <Button variant="outlined">Wallet</Button>
        </Stack>

        <Button variant="contained">
          Place Order
        </Button>
      </Stack>
    </PageContainer>
  );
}