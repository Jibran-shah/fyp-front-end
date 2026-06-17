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
import MarketplaceFilters from "../../components/common/marketplace/marketplaceFilter/MarketplaceFilters";

import { Section } from "../../components/common/layout/Section";

import MarketplaceGrid from "../../components/common/marketplace/marketplaceGrid/MarketplaceGrid";
import MarketplaceGridItem from "../../components/common/marketplace/marketplaceGridItem/MarketplaceGridItem";
import MarketplaceServiceCard from "../../components/common/marketplace/cards/MarketplaceServiceCard";

import MapView from "../../components/common/MapView";

import { useServices } from "../../hooks/api/services/services.hooks";

// =========================
// Marker UI
// =========================
function ServiceMarker({ service }) {
  return (
    <div
      style={{
        width: 45,
        height: 45,
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      <img
        src={service.image}
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

// =========================
// Hover UI
// =========================
function ServiceHover({ service }) {
  return (
    <div style={{ width: 200 }}>
      <strong>{service.name}</strong>
      <p style={{ margin: 0, fontSize: 12 }}>
        {service.description}
      </p>
    </div>
  );
}

export default function ServicesSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapMode, setMapMode] = useState(false);

  // =========================
  // URL → FILTER STATE (SOURCE OF TRUTH)
  // =========================
  const filters = useMemo(() => {
    return {
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
      sort: searchParams.get("sort") || "-createdAt",
      status: searchParams.get("status") || "",
      provider: searchParams.get("provider") || "",

      locationLat: searchParams.get("locationLat") || "",
      locationLn: searchParams.get("locationLn") || "",
      radius: searchParams.get("radius") || 10000,

      page: Number(searchParams.get("page") || 1),
      limit: 12,
    };
  }, [searchParams]);

  // =========================
  // API CALL
  // =========================
  const { data, isLoading, isError } = useServices(filters);

  const services = data?.data ?? [];
  const meta = data?.meta;

  // =========================
  // UPDATE FILTERS (KEEP URL SYNC)
  // =========================
  const setFilters = (newFilters) => {
    const params = new URLSearchParams();

    Object.entries(newFilters).forEach(([key, value]) => {
      if (value !== "" && value !== null && value !== undefined) {
        params.set(key, String(value));
      }
    });

    setSearchParams(params);
  };

  // =========================
  // PAGINATION
  // =========================
  const handlePageChange = (_, newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  // =========================
  // MAP MARKERS
  // =========================
  const mapMarkers = useMemo(() => {
    return services
      .filter((s) => s?.location?.coordinates?.length === 2)
      .map((service) => ({
        id: service._id,
        lat: service.location.coordinates[1],
        lng: service.location.coordinates[0],

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
        <Stack spacing={5}>

          {/* HERO + FILTERS (SAME AS YOUR FIRST PAGE PATTERN) */}
          <HeroSection
            title="Search Services"
            subtitle="Find exactly what you need from verified professionals"
            backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          >
            <MarketplaceFilters
              filters={filters}
              onChange={setFilters}
              config={{
                search: true,
                searchPlaceholder: "Search services...",

                sortOptions: [
                  { label: "Newest", value: "-createdAt" },
                  { label: "Oldest", value: "createdAt" },
                  { label: "Price ↑", value: "price" },
                  { label: "Price ↓", value: "-price" },
                  { label: "Rating", value: "-ratingAverage" },
                ],

                extraFilters: [
                  {
                    key: "status",
                    label: "Status",
                    type: "select",
                    options: [
                      { label: "All", value: "" },
                      { label: "Active", value: "active" },
                      { label: "Inactive", value: "inactive" },
                    ],
                  },

                  {
                    key: "radius",
                    label: "Radius (meters)",
                    type: "slider",
                    min: 1000,
                    max: 100000,
                    step: 1000,
                  },
                ],
              }}
            />

            <Button
              variant="contained"
              onClick={() => setMapMode((p) => !p)}
              sx={{ mt: 2 }}
            >
              {mapMode ? "View List" : "View in Map"}
            </Button>
          </HeroSection>

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
                    page={filters.page}
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
                renderHover={(service) => (
                  <ServiceHover service={service} />
                )}
                onMarkerClick={(service) => {
                  console.log("Clicked:", service.raw);
                }}
              />
            </Section>
          )}
        </Stack>
      </Container>
    </Box>
  );
}