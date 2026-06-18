import {
  Box,
  Container,
  Stack,
  Pagination,
  Button,
} from "@mui/material";

import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import HeroSection from "../../components/common/layout/HeroSection";
import { Section } from "../../components/common/layout/Section";

import MarketplaceGrid from "../../components/common/marketplace/marketplaceGrid/MarketplaceGrid";
import MarketplaceGridItem from "../../components/common/marketplace/marketplaceGridItem/MarketplaceGridItem";
import MarketplaceServiceCard from "../../components/common/marketplace/cards/MarketplaceServiceCard";

import MapView from "../../components/common/MapView";

import { useServices } from "../../hooks/api/services/services.hooks";
import { ServiceMarker } from "../../components/page/services/ServiceMarket";

export default function ServicesSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapMode, setMapMode] = useState(false);

  /* =========================
     FILTERS FROM URL
  ========================= */
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
      limit: 12,
    };
  }, [searchParams]);

  /* =========================
     API
  ========================= */
  const { data, isLoading, isError } = useServices(query);

  const services = data?.data ?? [];
  const meta = data?.meta;

  /* =========================
     PAGINATION
  ========================= */
  const handlePageChange = (_, newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    setSearchParams(params);
  };

  /* =========================
     MAP MARKERS
  ========================= */
  const mapMarkers = useMemo(() => {
    return services
      .filter(
        (s) =>
          Array.isArray(s?.location?.coordinates) &&
          s.location.coordinates.length === 2
      )
      .map((service) => ({
        id: service._id,
        lng: service.location.coordinates[0],
        lat: service.location.coordinates[1],

        name: service.title,
        description: service.category?.name || "",
        image: service.images?.[0],

        raw: service,
      }));
  }, [services]);

  if (isLoading) return null;
  if (isError) return null;

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack spacing={4}>

          {/* HERO */}
          <HeroSection
            title="Search Services"
            subtitle="Find exactly what you need from verified professionals"
            backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          />

          {/* TOGGLE BUTTON */}
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={() => setMapMode((prev) => !prev)}
            >
              {mapMode ? "View List" : "View Map"}
            </Button>
          </Box>

          {/* CONTENT */}
          {!mapMode ? (
            <>
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
            </>
          ) : (
            <Section
              title="Map View"
              subtitle={`${mapMarkers.length} services on map`}
            >
              <MapView
                markers={mapMarkers}
                renderMarker={(service) => (
                  <ServiceMarker service={service} />
                )}

                /* ✅ FIXED: USE FULL CARD ON HOVER */
                renderHover={(service) => (
                  <Box sx={{ width: 340 }}>
                    <MarketplaceServiceCard
                      service={service.raw}
                      compact
                    />
                  </Box>
                )}

                onMarkerClick={(service) => {
                  console.log("Clicked service:", service.raw);
                }}
              />
            </Section>
          )}
        </Stack>
      </Container>
    </Box>
  );
}