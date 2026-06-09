import { Paper } from "@mui/material";

export default function SafeCard({ children }) {
  return (
    <Paper sx={{ p: 3, borderRadius: 2 }}>
      {children}
    </Paper>
  );
}