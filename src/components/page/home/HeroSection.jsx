import { Box, Typography, Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        p: { xs: 4, md: 6 },
        borderRadius: 2,
        overflow: "hidden",
        color: "white",
        background:
          "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
      }}
    >
      {/* BACKGROUND IMAGE LAYER (MARKETPLACE FEEL) */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "45%",
          height: "100%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />

      {/* CONTENT */}
      <Stack spacing={2} sx={{ position: "relative", zIndex: 2 }}>
        
        {/* TITLE */}
        <Typography variant="h3" fontWeight={900}>
          Discover Everything You Need
          <br />
          in One Marketplace
        </Typography>

        {/* SUBTITLE */}
        <Typography sx={{ maxWidth: 650, opacity: 0.9 }}>
          Buy products, hire professionals, and grow your business — all in one place.
        </Typography>

        {/* SEARCH BAR (IMPORTANT UPGRADE) */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            gap: 1,
            maxWidth: 500,
          }}
        >
          <TextField
            size="small"
            fullWidth
            placeholder="Search products or services..."
            sx={{
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: 1,
              input: { color: "white" },
            }}
          />

          <Button variant="contained" color="inherit">
            Search
          </Button>
        </Box>

        {/* CTA BUTTONS */}
        <Stack direction="row" spacing={2} mt={2}>
          
          {/* PRIMARY CTA */}
          <Button
            variant="contained"
            color="inherit"
            onClick={() => navigate("/products")}
          >
            Browse Marketplace
          </Button>

          {/* SECONDARY CTA */}
          <Button
            variant="outlined"
            sx={{
              borderColor: "rgba(255,255,255,0.7)",
              color: "white",
            }}
            onClick={() => navigate("/services")}
          >
            Explore Services
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}