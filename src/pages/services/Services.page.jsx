import { Box, Stack, Grid } from "@mui/material";

import ServiceCard from "../../components/page/services/ServiceCard";
import MarketplaceFilters from "../../components/common/marketplace/MarketplaceFilters";

export default function ServicesPage() {
  const mockServices = [];

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2}>
        <MarketplaceFilters />

        <Grid container spacing={2}>
          {mockServices.map((s) => (
            <Grid item xs={12} md={4} key={s._id}>
              <ServiceCard service={s} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}