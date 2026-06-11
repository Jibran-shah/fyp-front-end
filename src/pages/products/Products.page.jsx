import { Box, Container, Stack } from "@mui/material";

import HeroSection from "../../components/common/layout/HeroSection";
import MarketplaceFilters from "../../components/common/marketplace/marketplaceFilter/MarketplaceFilters";

import { Section } from "../../components/common/layout/Section";
import MarketplaceGrid from "../../components/common/marketplace/marketplaceGrid/MarketplaceGrid";
import MarketplaceGridItem from "../../components/common/marketplace/marketplaceGridItem/MarketplaceGridItem";
import MarketplaceProductCard from "../../components/common/marketplace/cards/MarketplaceProductCard";

import { useGetProducts } from "../../hooks/api/products/useGetProducts";
import { useState } from "react";
import { useMarketplaceProductActions } from "../../hooks/ui/marketplace/useMarketplaceProductActions";


export default function ProductsPage() {


    const { handleCardClick, handleAddToCart } =
      useMarketplaceProductActions();
  

  const [filters, setFilters] = useState({
    page: 1,
    limit: 50,
  });

  const { data, isLoading, isError } = useGetProducts(filters);

  const products = data?.data ?? [];

  if (isLoading) return null;
  if (isError) return null;

  // helper: grouping instead of mock arrays
  const electronics = products.filter((p) =>
    p.categoryPath?.toLowerCase().includes("electronics")
  );

  const fashion = products.filter((p) =>
    p.categoryPath?.toLowerCase().includes("fashion")
  );

  const homeLiving = products.filter((p) =>
    p.categoryPath?.toLowerCase().includes("home")
  );

  return (
    <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack spacing={6}>

          {/* HERO */}
          <HeroSection
            title="Discover Products"
            subtitle="Find electronics, fashion, and everything you need in one place."
            backgroundImage="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          >
            <MarketplaceFilters
              filters={filters}
              onChange={setFilters}
            />
          </HeroSection>

          {/* ELECTRONICS */}
          <Section title="Electronics" subtitle="Phones, laptops and gadgets">
            <MarketplaceGrid>
              {electronics.map((product) => (
                <MarketplaceGridItem key={product._id}>
                  <MarketplaceProductCard
                                product={product}
                                onCardClick={handleCardClick}
                                onAddToCart={handleAddToCart}
                              />
                </MarketplaceGridItem>
              ))}
            </MarketplaceGrid>
          </Section>

          {/* FASHION */}
          <Section title="Fashion" subtitle="Trending clothing and accessories">
            <MarketplaceGrid>
              {fashion.map((product) => (
                <MarketplaceGridItem key={product._id}>
                  <MarketplaceProductCard product={product} />
                </MarketplaceGridItem>
              ))}
            </MarketplaceGrid>
          </Section>

          {/* HOME */}
          <Section title="Home & Living" subtitle="Furniture and home essentials">
            <MarketplaceGrid>
              {homeLiving.map((product) => (
                <MarketplaceGridItem key={product._id}>
                  <MarketplaceProductCard product={product} />
                </MarketplaceGridItem>
              ))}
            </MarketplaceGrid>
          </Section>

        </Stack>
      </Container>
    </Box>
  );
}