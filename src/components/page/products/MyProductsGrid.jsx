import { Box, Grid, CircularProgress, Typography } from "@mui/material";

import { useGetMySellerProducts } from "../../../hooks/api/products/products.hooks";
import MarketplaceProductCard from "../../common/marketplace/cards/MarketplaceProductCard";

export default function MyProductsGrid({
  onCardClick = () => {},
  onAddToCart = () => {},
}) {
  const { data, isLoading, isError } = useGetMySellerProducts();

  const products = data?.data || data || [];

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography color="error">
          Failed to load your products.
        </Typography>
      </Box>
    );
  }

  if (!products.length) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography>No products found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <MarketplaceProductCard
              product={product}
              onCardClick={onCardClick}
              onAddToCart={onAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}