import { Box, Typography, Stack } from "@mui/material";

export function Section({ title, subtitle, action, children }) {
  return (
    <div>
      {/* HEADER BLOCK */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        mb={2}
      >
        <Box>
          <Typography variant="h5" fontWeight={700}>
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 0.75,
                maxWidth: 600,
                lineHeight: 1.5,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        {action && <Box>{action}</Box>}
      </Stack>

      {/* 👇 THIS IS THE KEY FIX */}
      <Box sx={{ mt: 2 }}>
        {children}
      </Box>
    </div>
  );
}