import { Box, Container, Stack, CircularProgress, Typography } from "@mui/material";

import { useMyServices } from "../../hooks/api/services/services.hooks";
import MarketplaceServiceCard from "../../components/common/marketplace/cards/MarketplaceServiceCard";

export default function MyServicesList() {
  const { data, isLoading, isError } = useMyServices();

  const services = data?.data || data || [];

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography color="error">
          Failed to load your services
        </Typography>
      </Box>
    );
  }

  if (!services.length) {
    return (
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography>No services found</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Stack spacing={2}>
        {services.map((service) => (
          <MarketplaceServiceCard
            key={service._id}
            service={service}
          />
        ))}
      </Stack>
    </Container>
  );
}