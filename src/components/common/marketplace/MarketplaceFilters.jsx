import { Paper, Stack, TextField } from "@mui/material";

export default function MarketplaceFilters() {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row" spacing={2}>
        <TextField label="Search" size="small" />
        <TextField label="Min Price" size="small" />
        <TextField label="Max Price" size="small" />
      </Stack>
    </Paper>
  );
}