import { Paper, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <Paper sx={{ p: 3 }}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button onClick={() => navigate("/profile")}>
          Profile
        </Button>

        <Button onClick={() => navigate("/profile/edit")}>
          Edit Profile
        </Button>

        <Button onClick={() => navigate("/buyer/dashboard")}>
          Dashboard
        </Button>

        <Button color="error" onClick={() => navigate("/profile/delete")}>
          Delete Account
        </Button>
      </Stack>
    </Paper>
  );
}