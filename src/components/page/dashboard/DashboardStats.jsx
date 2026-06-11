import { Paper, Stack, Typography } from "@mui/material";

import {StatCard} from "../../common/StatCard"

export default function DashboardStats({ title, stats = [] }) {
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
      <Typography fontWeight={700} mb={2}>
        {title}
      </Typography>

      <Stack direction="row" spacing={2}>
        {stats.map((s) => (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
          />
        ))}
      </Stack>
    </Paper>
  );
}