import { Box, Paper, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBuyerProfile } from "../../hooks/api/profile/useBuyerProfile"

export default function DashboardEntryPage() {
  const navigate = useNavigate();
  const { data: profile } = useBuyerProfile();

  const roles = profile?.role || [];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3
      }}
    >
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" fontWeight={600} mb={2}>
          Select Dashboard
        </Typography>

        <Stack spacing={2}>

          {roles.includes("buyer") && (
            <Button
              variant="contained"
              onClick={() => navigate("/buyer/dashboard")}
            >
              Buyer Dashboard
            </Button>
          )}

          {roles.includes("seller") && (
            <Button
              variant="contained"
              onClick={() => navigate("/seller/dashboard")}
            >
              Seller Dashboard
            </Button>
          )}

          {roles.includes("serviceProvider") && (
            <Button
              variant="contained"
              onClick={() => navigate("/provider/dashboard")}
            >
              Provider Dashboard
            </Button>
          )}

          {!roles.length && (
            <Typography color="error">
              No dashboard available. Create profile first.
            </Typography>
          )}

        </Stack>
      </Paper>
    </Box>
  );
}