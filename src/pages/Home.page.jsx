import { Box, Container, Stack, Button } from "@mui/material";

import FeaturedProducts from "../components/page/products/FeaturedProducts";
import FeaturedServices from "../components/page/services/FeaturedServices";
import HeroSection from "../components/common/layout/HeroSection";

export default function HomePage() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      {/* CONTENT AREA */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={6}>
          {/* HERO */}
          <HeroSection
            title="Discover Everything You Need"
            subtitle="Buy products, hire professionals, and grow your business — all in one place."
            backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            actions={[
              <Button key="1" variant="contained">
                Browse Products
              </Button>,
              <Button key="2" variant="outlined">
                Explore Services
              </Button>,
            ]}
          />

          <FeaturedProducts />
          <FeaturedServices />
        </Stack>
      </Container>
    </Box>
  );
}