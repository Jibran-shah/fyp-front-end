import { Box, Container, Stack, Pagination } from "@mui/material";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import HeroSection from "../../components/common/layout/HeroSection";
import { Section } from "../../components/common/layout/Section";

import MarketplaceGrid from "../../components/common/marketplace/marketplaceGrid/MarketplaceGrid";
import MarketplaceGridItem from "../../components/common/marketplace/marketplaceGridItem/MarketplaceGridItem";
import MarketplaceServiceCard from "../../components/common/marketplace/cards/MarketplaceServiceCard";

import { useServices } from "../../hooks/api/services/services.hooks";

export default function ServicesSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // =========================
  // URL → query object
  // =========================
  const query = useMemo(() => {
    return {
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
      sort: searchParams.get("sort") || "-createdAt",
      status: searchParams.get("status") || "",
      provider: searchParams.get("provider") || "",

      page: Number(searchParams.get("page") || 1),
      limit: 12
    };
  }, [searchParams]);

  // =========================
  // API call
  // =========================
  const { data, isLoading, isError } = useServices(query);

  const services = data?.data ?? [];
  const meta = data?.meta;

  // =========================
  // Pagination handler (URL synced)
  // =========================
  const handlePageChange = (_, newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    setSearchParams(params);
  };

  if (isLoading) return null;
  if (isError) return null;

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack spacing={5}>

          {/* HERO */}
          <HeroSection
            title="Search Services"
            subtitle="Find exactly what you need from verified professionals"
            backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          />

          {/* RESULTS */}
          <Section
            title="Results"
            subtitle={`Showing ${services.length} services`}
          >
            <MarketplaceGrid>
              {services.map((service) => (
                <MarketplaceGridItem key={service._id}>
                  <MarketplaceServiceCard service={service} />
                </MarketplaceGridItem>
              ))}
            </MarketplaceGrid>
          </Section>

          {/* PAGINATION */}
          {meta?.pages > 1 && (
            <Box display="flex" justifyContent="center" py={3}>
              <Pagination
                count={meta.pages}
                page={query.page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}

        </Stack>
      </Container>
    </Box>
  );
}