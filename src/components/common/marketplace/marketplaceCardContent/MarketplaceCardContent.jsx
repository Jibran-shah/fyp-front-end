import { Box, Typography, Stack } from "@mui/material";

export default function MarketplaceCardContent({ title, subtitle, children }) {
  return (
    <Box sx={{ p: 2 }}>
      <Stack spacing={1}>
        <Typography fontWeight={700} noWrap>
          {title}
        </Typography>

        {subtitle && (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        )}

        {children}
      </Stack>
    </Box>
  );
}