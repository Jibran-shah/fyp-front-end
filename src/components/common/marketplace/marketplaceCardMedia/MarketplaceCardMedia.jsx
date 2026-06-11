import { Box } from "@mui/material";

export default function MarketplaceCardMedia({ image }) {
  return (
    <Box
      sx={{
        height: 160,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}