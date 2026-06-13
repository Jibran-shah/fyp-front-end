import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

export default function AppHero({
  title,
  subtitle,
  backgroundImage,
  children,
  actions,
  variant = "center",
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: 340,
        display: "flex",
        alignItems: "center",
        borderRadius: 2,
        overflow: "hidden",

        // background image or theme gradient fallback
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* BACKGROUND OVERLAY (non-interactive) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",

          background: `linear-gradient(
            135deg,
            ${theme.palette.common.black}E0,
            ${theme.palette.primary.main}99
          )`,
        }}
      />

      {/* CONTENT */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          py: 6,
        }}
      >
        <Stack
          spacing={2}
          alignItems={variant === "center" ? "center" : "flex-start"}
          textAlign={variant === "center" ? "center" : "left"}
        >
          {title && (
            <Typography variant="h3" fontWeight={800}>
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography
              sx={{
                opacity: 0.85,
                maxWidth: 700,
                color: theme.palette.text.primary,
              }}
            >
              {subtitle}
            </Typography>
          )}

          {actions && (
            <Stack direction="row" spacing={2}>
              {actions}
            </Stack>
          )}

          {children && (
            <Box
              sx={{
                width: "100%",
                maxWidth: 1100,
                mt: 2,
              }}
            >
              {children}
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}