import { Card, CardContent, Typography, Grid, Stack, Chip } from "@mui/material";

export default function ProfileInfoCard({ baseProfile }) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography fontWeight={700} variant="h6">
          About
        </Typography>

        <Typography sx={{ mt: 1, color: "text.secondary" }}>
          {baseProfile?.bio || "No bio available"}
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography variant="caption">Phone</Typography>
            <Typography>{baseProfile?.phone || "-"}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="caption">Location</Typography>
            <Typography>
              {[baseProfile?.city, baseProfile?.country].filter(Boolean).join(", ") || "-"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}