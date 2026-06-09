import {
  Stack,
  Typography,
  Avatar
} from "@mui/material";

export default function SellerProfileInfo({
  profile
}) {
  return (
    <Stack spacing={3}>
      <Avatar
        src={profile?.shopLogo?.url}
        sx={{
          width: 100,
          height: 100
        }}
      />

      <Typography variant="h4">
        {profile?.shopName}
      </Typography>

      <Typography>
        {profile?.shopDescription}
      </Typography>

      <Typography>
        {profile?.fullAddress}
      </Typography>

      <Typography>
        Rating: {profile?.averageRating ?? 0}
      </Typography>

      <Typography>
        Products: {profile?.productCount ?? 0}
      </Typography>

      <Typography>
        Approved: {profile?.isApproved ? "Yes" : "No"}
      </Typography>
    </Stack>
  );
}