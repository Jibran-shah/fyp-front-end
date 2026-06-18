import { Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ActionButton } from "../../common/ActionButton";

export default function DashboardActions({
  actions = [],
  onSelectAction,
}) {
  const navigate = useNavigate();

  const handleClick = (action) => {
    // Dashboard view
    if (action.component) {
      onSelectAction?.(action);
      return;
    }

    // Navigation action
    if (action.path) {
      navigate(action.path);
      return;
    }

    onSelectAction?.(action);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        width: 280,
      }}
    >
      <Stack spacing={2}>
        {actions.map((action) => (
          <ActionButton
            key={action.label}
            label={action.label}
            icon={action.icon}
            onClick={() => handleClick(action)}
          />
        ))}
      </Stack>
    </Paper>
  );
}