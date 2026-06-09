import { Box, Stack } from "@mui/material";

import HomeHeader from "../components/page/home/HomeHeader";
import HeroSection from "../components/page/home/HeroSection";
import ProfileCard from "../components/page/home/ProfileCard";
import QuickActions from "../components/page/home/QuickActions";
import FeaturedProducts from "../components/page/home/FeaturedProducts";
import FeaturedServices from "../components/page/home/FeaturedServices";
import HomeFooter from "../components/page/home/HomeFooter";

export default function HomePage() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#0f172a", p: 3 }}>
      <Stack spacing={4} maxWidth={1000} mx="auto">

        <HomeHeader />

        <HeroSection />

        <QuickActions />

        <FeaturedProducts />

        <FeaturedServices />

        <ProfileCard />

        <HomeFooter />

      </Stack>
    </Box>
  );
}