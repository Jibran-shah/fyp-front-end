import { Box, Avatar, Typography, Stack, Chip } from "@mui/material";

export default function ProfileHeader({ coverUrl, avatarUrl, baseProfile, user, serviceProvider, productSeller }) {
  return (
    <Box
      sx={{
        height: 280,
        position: "relative",
        backgroundImage: coverUrl ? `url(${coverUrl})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        bgcolor: "grey.300",
      }}
    >
      {/* dark overlay */}
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.35)" }} />

      <Avatar
        src={avatarUrl}
        sx={{
          width: 140,
          height: 140,
          position: "absolute",
          bottom: -70,
          left: 30,
          border: "4px solid white",
        }}
      />

      <Box sx={{ position: "absolute", bottom: 20, left: 200, color: "white" }}>
        <Typography variant="h4" fontWeight={800}>
          {baseProfile?.fullName || user?.userName}
        </Typography>

        <Typography sx={{ opacity: 0.9 }}>@{user?.userName}</Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 1 }} flexWrap="wrap">
          <Chip label={user?.role || "User"} sx={{ color: "white", borderColor: "white" }} variant="outlined" />
          {serviceProvider && <Chip label="Provider" color="success" />}
          {productSeller && <Chip label="Seller" color="secondary" />}
        </Stack>
      </Box>
    </Box>
  );
}