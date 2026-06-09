import { Typography, Paper, Stack } from "@mui/material";
import PageContainer from "../../components/common/PageContainer";

export default function PaymentTransactionDetailsPage() {
  return (
    <PageContainer>
      <Typography variant="h5" mb={2}>
        Payment Details
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Stack spacing={1}>
          <Typography>Transaction ID: #123</Typography>
          <Typography>Status: Pending</Typography>
          <Typography>Amount: 2500</Typography>
          <Typography>Buyer: User XYZ</Typography>
          <Typography>Payable Type: BuyerOrder</Typography>
        </Stack>
      </Paper>
    </PageContainer>
  );
}