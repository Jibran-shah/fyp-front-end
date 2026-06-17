import { Box, Container, Stack, Button } from "@mui/material";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import HeroSection from "../../components/common/layout/HeroSection";
import FilterBar from "../../components/common/marketplace/marketplaceFilter/MarketplaceFilters";

import { Section } from "../../components/common/layout/Section";
import MarketplaceGrid from "../../components/common/marketplace/marketplaceGrid/MarketplaceGrid";
import MarketplaceGridItem from "../../components/common/marketplace/marketplaceGridItem/MarketplaceGridItem";
import MarketplaceProductCard from "../../components/common/marketplace/cards/MarketplaceProductCard";

import { useMarketplaceProductActions } from "../../hooks/ui/marketplace/useMarketplaceProductActions";
import { useGetProducts } from "../../hooks/api/products/products.hooks";
import PageContainer from "../../components/common/layout/pageContainer/PageContainer";

export default function ProductsPage() {
  const navigate = useNavigate();

  const { handleCardClick, handleAddToCart } =
    useMarketplaceProductActions();

  // filter state (ONLY for navigation)
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    sort: "-createdAt",
  });

  const { data, isLoading, isError } = useGetProducts({
    page: 1,
    limit: 50,
  });

  const products = data?.data ?? [];

  // category split (safe + memoized)
  const electronics = useMemo(
    () =>
      products.filter((p) =>
        p.categoryPath?.toLowerCase().includes("electronics")
      ),
    [products]
  );

  const fashion = useMemo(
    () =>
      products.filter((p) =>
        p.categoryPath?.toLowerCase().includes("fashion")
      ),
    [products]
  );

  const homeLiving = useMemo(
    () =>
      products.filter((p) =>
        p.categoryPath?.toLowerCase().includes("home")
      ),
    [products]
  );

  // navigation to search page
  const handleGoToSearch = () => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== "" && value !== null && value !== undefined) {
        params.set(key, String(value));
      }
    });

    navigate(`/products/search?${params.toString()}`);
  };

  if (isLoading) return null;
  if (isError) return null;

  return (
    <PageContainer>
        {/* HERO */}
        <HeroSection
          title="Discover Products"
          subtitle="Find electronics, fashion, and everything you need in one place."
          backgroundImage="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        >

          {/* ✅ YOUR NEW GENERIC FILTER BAR */}
          <FilterBar
            filters={filters}
            onChange={setFilters}
            config={{
              search: true,
              searchPlaceholder: "Search products...",

              sortOptions: [
                { label: "Newest", value: "-createdAt" },
                { label: "Oldest", value: "createdAt" },
                { label: "Price ↑", value: "price" },
                { label: "Price ↓", value: "-price" },
                { label: "Rating", value: "-ratingAverage" },
              ],

              extraFilters: [
                {
                  key: "inStock",
                  label: "Stock",
                  type: "select",
                  options: [
                    { label: "All", value: "" },
                    { label: "In Stock", value: true },
                    { label: "Out of Stock", value: false },
                  ],
                },
              ],
            }}
          />

          <Button
            variant="contained"
            onClick={handleGoToSearch}
            sx={{ mt: 2 }}
          >
            Search Products
          </Button>

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
                <MarketplaceProductCard
                  product={product}
                  onCardClick={handleCardClick}
                  onAddToCart={handleAddToCart}
                />
              </MarketplaceGridItem>
            ))}
          </MarketplaceGrid>
        </Section>

        {/* HOME */}
        <Section title="Home & Living" subtitle="Furniture and home essentials">
          <MarketplaceGrid>
            {homeLiving.map((product) => (
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
    </PageContainer>
  );
}