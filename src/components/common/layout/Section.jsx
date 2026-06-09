import { Box, Typography } from "@mui/material";

export function Section({ title, subtitle, children }) {
  return (
    <Box sx={{ mt: 4 }}>
      {title && (
        <Typography variant="h6" sx={{ color: "white", mb: 0.5 }}>
          {title}
        </Typography>
      )}

      {subtitle && (
        <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
          {subtitle}
        </Typography>
      )}

      {children}
    </Box>
  );
}