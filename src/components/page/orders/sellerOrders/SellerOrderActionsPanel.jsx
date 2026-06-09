import { Stack, Button } from "@mui/material";

export default function SellerOrderActionsPanel() {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      <Button variant="outlined">Process</Button>
      <Button variant="outlined">Ship</Button>
      <Button variant="contained">Deliver</Button>
      <Button color="error">Cancel</Button>
    </Stack>
  );
}