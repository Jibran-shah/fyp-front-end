import { Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ActionButton } from "../../common/ActionButton";

export default function DashboardActions({ actions = [] }) {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
      }}
    >
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {actions.map((a) => (
          <ActionButton
            key={a.label}
            label={a.label}
            icon={a.icon}
            onClick={() => navigate(a.path)}
          />
        ))}
      </Stack>
    </Paper>
  );
}