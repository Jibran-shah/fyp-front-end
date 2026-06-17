import {
  Box,
  Paper,
  Typography,
  Stack,
  Button,
  Card,
  CardActionArea,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAvailableDashboards } from "../../hooks/ui/useAvailableDashboards";

export default function DashboardEntryPage() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const availableDashboards = useAvailableDashboards(user);

  return (
    <Box
      sx={(theme) => ({
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        background: `linear-gradient(
          135deg,
          ${theme.palette.background.default},
          ${theme.palette.background.paper}
        )`,
      })}
    >
      <Paper
        elevation={10}
        sx={(theme) => ({
          p: 4,
          width: "100%",
          maxWidth: 460,
          borderRadius: 3,
          border: `1px solid ${theme.palette.divider}`,
        })}
      >
        <Typography variant="h5" fontWeight={800} mb={0.5}>
          Choose Your Workspace
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Select a dashboard to continue
        </Typography>

        <Stack spacing={2}>
          {availableDashboards.map((d) => (
            <Card
              key={d.key}
              sx={(theme) => ({
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: "none",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: theme.shadows[6],
                  borderColor: theme.palette.primary.main,
                },
              })}
            >
              <CardActionArea onClick={() => navigate(d.route)}>
                <Box sx={{ p: 2 }}>
                  <Typography fontWeight={700}>
                    {d.label}
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    Click to enter workspace
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Stack>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button variant="outlined" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}