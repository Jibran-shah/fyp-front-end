import { Card, CardContent, Typography, Stack, Chip, Button } from "@mui/material";

export default function ServiceProviderCard({
  serviceProvider,
  isOwnProfile,
  onEdit,
  onDelete,
  onCreate,
}) {
  // ================= EMPTY STATE =================
  if (!serviceProvider) {
    return isOwnProfile ? (
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700}>
            Service Provider Profile
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            You haven’t created a service provider profile yet.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={onCreate}
          >
            Become a Service Provider
          </Button>
        </CardContent>
      </Card>
    ) : null;
  }

  // ================= EXISTING PROFILE =================
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={700}>
          Service Provider
        </Typography>

        <Typography sx={{ mt: 1 }}>
          {serviceProvider.title}
        </Typography>

        <Typography color="text.secondary">
          {serviceProvider.description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
          {serviceProvider.skills?.map((s) => (
            <Chip key={s} label={s} size="small" />
          ))}
        </Stack>

        <Typography sx={{ mt: 2 }}>
          ⭐ {serviceProvider.ratingAverage ?? 0}
        </Typography>

        {isOwnProfile && (
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button variant="outlined" onClick={onEdit}>
              Edit
            </Button>

            <Button color="error" variant="outlined" onClick={onDelete}>
              Delete
            </Button>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}