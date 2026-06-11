import { Grid } from "@mui/material";

export default function MarketplaceGrid({ children, spacing = 3 }) {
  return (
    <Grid container spacing={spacing}>
      {children}
    </Grid>
  );
}