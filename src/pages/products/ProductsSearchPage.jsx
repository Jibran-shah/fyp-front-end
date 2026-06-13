import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";

import MarketplaceGrid from "../../components/common/marketplace/marketplaceGrid/MarketplaceGrid";
import MarketplaceGridItem from "../../components/common/marketplace/marketplaceGridItem/MarketplaceGridItem";
import MarketplaceProductCard from "../../components/common/marketplace/cards/MarketplaceProductCard";

import { useGetProducts } from "../../hooks/api/products/products.hooks";
import { useMarketplaceProductActions } from "../../hooks/ui/marketplace/useMarketplaceProductActions";

export default function ProductSearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { handleCardClick, handleAddToCart } =
    useMarketplaceProductActions();

  const filters = {
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    sort: searchParams.get("sort") || "newest",
    page: Number(searchParams.get("page")) || 1,
    limit: Number(searchParams.get("limit")) || 20,
  };

  const { data, isLoading, isError } = useGetProducts(filters);

  const products = data?.data ?? [];

  const meta = data?.meta ?? {};

  const currentPage = meta.page || filters.page;
  const totalPages = meta.pages || 1;

  const updatePage = (page) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", page);

    navigate(`/products/search?${params.toString()}`);
  };

  if (isLoading) {
    return (
      <Container maxWidth="xl">
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container maxWidth="xl">
        <Typography color="error">
          Failed to load products
        </Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Typography variant="h4" fontWeight={700}>
              Search Results
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {products.length} products found
            </Typography>
          </Stack>

          <MarketplaceGrid>
            {products.map((product) => (
              <MarketplaceGridItem key={product._id}>
                <MarketplaceProductCard
                  product={product}
                  onCardClick={handleCardClick}
                  onAddToCart={handleAddToCart}
                />
              </MarketplaceGridItem>
            ))}
          </MarketplaceGrid>

          {products.length === 0 && (
            <Typography
              textAlign="center"
              color="text.secondary"
            >
              No products found.
            </Typography>
          )}

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="outlined"
              disabled={currentPage <= 1}
              onClick={() => updatePage(currentPage - 1)}
            >
              Previous
            </Button>

            <Typography fontWeight={600}>
              Page {currentPage} of {totalPages}
            </Typography>

            <Button
              variant="outlined"
              disabled={currentPage >= totalPages}
              onClick={() => updatePage(currentPage + 1)}
            >
              Next
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}