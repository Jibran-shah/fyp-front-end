import { Box } from "@mui/material";

export default function MarketplaceCardMedia({ images }) {
  console.log("Product Images:",images)
  return (
    <Box
      sx={{
        height: 160,
        backgroundImage: `url(${images?.[0]?.file?.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}