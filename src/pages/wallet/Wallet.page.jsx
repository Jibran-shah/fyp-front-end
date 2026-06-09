import { Box, Typography, Paper, Stack, Button } from "@mui/material";
import WalletTransactionCard from "../../components/wallet/WalletTransactionCard";

export default function WalletPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>
        My Wallet
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">
          Balance: 5000
        </Typography>
      </Paper>

      <Stack spacing={2}>
        <WalletTransactionCard />
        <WalletTransactionCard />
      </Stack>

      <Button sx={{ mt: 2 }} variant="contained">
        Withdraw
      </Button>
    </Box>
  );
}