// MarketplaceGridItem.jsx

import { Grid } from "@mui/material";

export default function MarketplaceGridItem({
  children,
  size = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  },
}) {
  return (
    <Grid size={size}>
      {children}
    </Grid>
  );
}