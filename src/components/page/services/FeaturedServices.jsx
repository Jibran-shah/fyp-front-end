import Grid from "@mui/material/Grid";

import { useServices } from "../../../hooks/api/services/services.hooks";

import { Section } from "../../common/layout/Section";
import MarketplaceServiceCard from "../../common/marketplace/cards/MarketplaceServiceCard";
import MarketplaceGridItem from "../../common/marketplace/marketplaceGridItem/MarketplaceGridItem";

export default function FeaturedServices() {
  const { data, isLoading, isError } = useServices({
    page: 1,
    limit: 8,
  });

  const services = data?.data ?? [];

  if (isLoading) {
    return null;
  }

  if (isError) {
    return null;
  }

  return (
    <Section
      title="Featured Services"
      subtitle="Hire skilled professionals for your projects"
    >
      <Grid container spacing={3}>
        {services.map((service) => (
          <MarketplaceGridItem key={service._id}>
            <MarketplaceServiceCard service={service} />
          </MarketplaceGridItem>
        ))}
      </Grid>
    </Section>
  );
}