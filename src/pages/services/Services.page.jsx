import { Box, Container, Stack, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeroSection from "../../components/common/layout/HeroSection";
import MarketplaceFilters from "../../components/common/marketplace/marketplaceFilter/MarketplaceFilters";

import { Section } from "../../components/common/layout/Section";
import MarketplaceGrid from "../../components/common/marketplace/marketplaceGrid/MarketplaceGrid";
import MarketplaceGridItem from "../../components/common/marketplace/marketplaceGridItem/MarketplaceGridItem";
import MarketplaceServiceCard from "../../components/common/marketplace/cards/MarketplaceServiceCard";

import { useServices } from "../../hooks/api/services/services.hooks";
import { useGeoLocation } from "../../hooks/ui/useGeoLocation";
import PageContainer from "../../components/common/layout/pageContainer/PageContainer";

export default function ServicesPage() {
  const navigate = useNavigate();

  // =========================
  // FILTER STATE
  // =========================
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    sort: "-createdAt",
    status: "",
    provider: "",
    locationLat: "",
    locationLn: "",
    radius: 10000 // default 10km
  });

  // =========================
  // GEO LOCATION AUTO FILL
  // =========================
  useGeoLocation((key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  });

  // =========================
  // FEATURED SERVICES
  // =========================
  const { data, isLoading, isError } = useServices({
    page: 1,
    limit: 20
  });

  const services = data?.data ?? [];

  // =========================
  // NAVIGATION TO SEARCH PAGE
  // =========================
  const handleGoToSearch = () => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== "" && value !== null && value !== undefined) {
        params.set(key, String(value));
      }
    });

    navigate(`/services/search?${params.toString()}`);
  };

  if (isLoading) return null;
  if (isError) return null;

  return (
      <PageContainer>
        {/* HERO */}
        <HeroSection
          title="Hire Skilled Professionals"
          subtitle="Browse verified freelancers and agencies for your projects"
          backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        >

          {/* FILTERS */}
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
                { label: "Rating", value: "-ratingAverage" }
              ],

              extraFilters: [
                {
                  key: "status",
                  label: "Status",
                  type: "select",
                  options: [
                    { label: "All", value: "" },
                    { label: "Active", value: "active" },
                    { label: "Inactive", value: "inactive" }
                  ]
                },

                {
                  key: "radius",
                  label: "Radius (meters)",
                  type: "slider",
                  min: 1000,
                  max: 100000,
                  step: 1000
                }
              ]
            }}
          />

          <Button
            variant="contained"
            onClick={handleGoToSearch}
            sx={{ mt: 2 }}
          >
            Search Services
          </Button>

        </HeroSection>

        {/* FEATURED SERVICES */}
        <Section
          title="Featured Services"
          subtitle="Top rated professionals available for hire"
        >
          <MarketplaceGrid>
            {services.map((service) => (
              <MarketplaceGridItem key={service._id}>
                <MarketplaceServiceCard service={service} />
              </MarketplaceGridItem>
            ))}
          </MarketplaceGrid>
        </Section>
    </PageContainer>
  );
}