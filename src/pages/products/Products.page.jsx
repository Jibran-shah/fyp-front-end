import { Box, Stack, Grid } from "@mui/material";

import ProductCard from "../../components/page/products/ProductCard";
import MarketplaceFilters from "../../components/common/marketplace/MarketplaceFilters";

export default function ProductsPage() {
  const mockProducts = [];

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2}>
        <MarketplaceFilters />

        <Grid container spacing={2}>
          {mockProducts.map((p) => (
            <Grid item xs={12} md={4} key={p._id}>
              <ProductCard product={p} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}