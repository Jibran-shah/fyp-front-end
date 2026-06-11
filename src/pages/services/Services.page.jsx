import { Box, Container, Stack } from "@mui/material";
import { useState } from "react";

import HeroSection from "../../components/common/layout/HeroSection";
import MarketplaceFilters from "../../components/common/marketplace/marketplaceFilter/MarketplaceFilters";

import { Section } from "../../components/common/layout/Section";
import MarketplaceGrid from "../../components/common/marketplace/marketplaceGrid/MarketplaceGrid";
import MarketplaceGridItem from "../../components/common/marketplace/marketplaceGridItem/MarketplaceGridItem";
import MarketplaceServiceCard from "../../components/common/marketplace/cards/MarketplaceServiceCard";

import {useServices} from "../../hooks/api/services/useServices"

export default function ServicesPage() {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 20,
  });

  const { data, isLoading, isError } = useServices(filters);

  // because hook uses: select: (res) => res.data
  const services = data?.data ?? [];

  if (isLoading) return null;
  if (isError) return null;

  return (
    <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack spacing={6}>

          {/* HERO */}
          <HeroSection
            title="Hire Skilled Professionals"
            subtitle="Browse verified freelancers and agencies for your projects"
            backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          >
            <MarketplaceFilters
              filters={filters}
              onChange={setFilters}
            />
          </HeroSection>

          {/* SERVICES */}
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

        </Stack>
      </Container>
    </Box>
  );
}