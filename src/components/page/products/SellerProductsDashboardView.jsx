import { useMarketplaceProductActions } from "../../../hooks/ui/marketplace/useMarketplaceProductActions";
import MyProductsGrid from "./MyProductsGrid";
import { Box, Typography } from "@mui/material";

export default function SellerProductsDashboardView() {
const {handleAddToCart,handleCardClick} = useMarketplaceProductActions();
  return (
    <Box>
      <Typography variant="h5" mb={2}>
        My Products
      </Typography>

      <MyProductsGrid onAddToCart={handleAddToCart} onCardClick={handleCardClick} />
    </Box>
  );
}