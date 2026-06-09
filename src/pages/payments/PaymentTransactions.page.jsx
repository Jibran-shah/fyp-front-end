import { Typography, Stack } from "@mui/material";

import PaymentTransactionCard from "../../components/payments/PaymentTransactionCard";
import PageContainer from "../../components/common/PageContainer";

export default function PaymentTransactionsPage() {
  return (
    <PageContainer>
      <Typography variant="h5" mb={2}>
        My Payments
      </Typography>

      <Stack spacing={2}>
        <PaymentTransactionCard />
        <PaymentTransactionCard />
      </Stack>
    </PageContainer>
  );
}