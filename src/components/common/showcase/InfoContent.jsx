import { Box, Stack, Typography, Button } from "@mui/material";

export default function InfoContent({
  title,
  subtitle,
  description,
  features = [],
  primaryButton,
  secondaryButton,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      {/* 🔥 FIXED WIDTH CONTAINER */}
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          textWrap:"wrap",
          alignItems: "flex-start",
        }}
      >
        {/* TITLE */}
        {title && (
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{
              width: "100%",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              lineHeight: 1.15,
            }}
          >
            {title}
          </Typography>
        )}

        {/* SUBTITLE */}
        {subtitle && (
          <Typography
            variant="h6"
            sx={{
              opacity: 0.8,
              fontWeight: 500,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {/* DESCRIPTION */}
        {description && (
          <Typography
            variant="body1"
            sx={{
              opacity: 0.7,
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>
        )}

        {/* FEATURES */}
        {features.length > 0 && (
          <Stack spacing={1} sx={{ mt: 1 }}>
            {features.map((f, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{ opacity: 0.75 }}
              >
                • {f}
              </Typography>
            ))}
          </Stack>
        )}

        {/* BUTTONS */}
        {(primaryButton || secondaryButton) && (
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            {primaryButton && (
              <Button
                variant="contained"
                onClick={primaryButton.onClick}
              >
                {primaryButton.text}
              </Button>
            )}

            {secondaryButton && (
              <Button
                variant="outlined"
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.text}
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}