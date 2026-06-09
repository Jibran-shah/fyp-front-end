import { Typography, Button } from "@mui/material";

import PageContainer from "../../components/common/PageContainer";
import SummaryCard from "../../components/common/SummaryCard";

export default function CheckoutPage() {
  return (
    <PageContainer>
      <Typography variant="h4" mb={3}>
        Checkout
      </Typography>

      <SummaryCard title="Payment Summary">
        <Typography>Subtotal: Rs. 1000</Typography>
        <Typography>Delivery Fee: Rs. 100</Typography>
        <Typography fontWeight={600}>
          Total: Rs. 1100
        </Typography>

        <Button variant="contained">
          Place Order
        </Button>
      </SummaryCard>
    </PageContainer>
  );
}