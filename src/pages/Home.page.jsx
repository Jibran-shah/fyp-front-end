import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import FeaturedProducts from "../components/page/products/FeaturedProducts";
import FeaturedServices from "../components/page/services/FeaturedServices";
import HeroSection from "../components/common/layout/HeroSection";

// ✅ NEW IMPORT
import InteractiveInfoSection from "../components/common/showcase/InteractiveInfoSection";
import PaymentTrustSection from "../components/common/PaymentTrustSection";
import AboutUsSection from "../components/common/AboutUsSection";
import PageContainer from "../components/common/layout/pageContainer/PageContainer";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <PageContainer>
        {/* HERO */}
        <HeroSection
          title="Discover Everything You Need"
          subtitle="Buy products, hire professionals, and grow your business — all in one place."
          backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          actions={[
            <Button
              key="1"
              variant="contained"
              onClick={() => navigate("/products")}
            >
              Browse Products
            </Button>,
            <Button
              key="2"
              variant="outlined"
              onClick={() => navigate("/services")}
            >
              Explore Services
            </Button>,
          ]}
        />

        {/* 🆕 MARKETPLACE SHOWCASE SECTION */}
        <InteractiveInfoSection
          title="Become a Seller in Minutes"
          subtitle="Turn your products into profit"
          description="Create your shop, list products, and reach thousands of customers in your area without any complexity."

          features={[
            "Easy product listing",
            "Secure buyer chat",
            "Fast payouts",
            "Local audience reach",
          ]}

          primaryButton={{
            text: "Start Selling",
            onClick: () => navigate("/seller/register"),
          }}

          secondaryButton={{
            text: "Browse Products",
            onClick: () => navigate("/products"),
          }}

          images={[
            { id: 1, src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
            { id: 2, src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
            { id: 3, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d" },
            { id: 4, src: "https://images.unsplash.com/photo-1581091870622-3f9c1a6d2a3d" },
          ]}
        />

        <FeaturedProducts />

        <InteractiveInfoSection
          title="Offer Your Services and Get Clients Fast"
          subtitle="Turn your skills into income"
          description="Whether you're a designer, developer, electrician, tutor, or freelancer — list your services and get discovered by people near you instantly."

          features={[
            "Create service listings in minutes",
            "Get direct client requests",
            "Chat with customers easily",
            "Grow your local reputation",
          ]}

          primaryButton={{
            text: "Start Offering Services",
            onClick: () => navigate("/services/register"),
          }}

          secondaryButton={{
            text: "Explore Services",
            onClick: () => navigate("/services"),
          }}

          images={[
            {
              id: 1,
              src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
            },
            {
              id: 2,
              src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
            },
            {
              id: 3,
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
            },
            {
              id: 4,
              src: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
            },
          ]}
        />
        <FeaturedServices />

        <PaymentTrustSection/>
        <AboutUsSection/>
    </PageContainer>
  );
}