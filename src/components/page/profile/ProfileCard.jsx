import { Stack, Typography, Avatar } from "@mui/material";

export default function ProfileCard({ profile }) {
  return (
    <Stack spacing={2} alignItems="center">
      <Avatar
        src={profile.profileAvatar?.url || ""}
        sx={{ width: 80, height: 80 }}
      />

      <Typography variant="h5" fontWeight={600}>
        {profile.fullName}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {profile.bio || "No bio provided"}
      </Typography>

      <Stack spacing={1} sx={{ width: "100%", mt: 2 }}>
        <Typography>Email: {profile.user?.email}</Typography>
        <Typography>Phone: {profile.phone || "-"}</Typography>
        <Typography>
          Location: {profile.city || "-"}, {profile.country || "-"}
        </Typography>
        <Typography>Role: {profile.role?.join(", ")}</Typography>
      </Stack>
    </Stack>
  );
}