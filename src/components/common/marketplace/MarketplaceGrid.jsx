import { Grid } from "@mui/material";

export default function MarketplaceGrid({ children }) {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
}