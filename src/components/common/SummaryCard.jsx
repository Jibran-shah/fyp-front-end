import { Paper, Typography, Stack } from "@mui/material";

export default function SummaryCard({ title, children }) {
  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      {title && (
        <Typography variant="h6" mb={2}>
          {title}
        </Typography>
      )}

      <Stack spacing={1}>
        {children}
      </Stack>
    </Paper>
  );
}