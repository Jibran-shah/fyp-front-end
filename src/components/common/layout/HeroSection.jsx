import { Box, Container, Stack, Typography } from "@mui/material";

export default function AppHero({
  title,
  subtitle,
  backgroundImage,

  // optional sections
  children,
  actions,
  variant = "center", // "center" | "split"
}) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: 340,
        display: "flex",
        alignItems: "center",
        color: "white",
        borderRadius: 2,
        overflow: "hidden",

        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.88), rgba(37,99,235,0.65))",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: 6,
        }}
      >
        <Stack
          spacing={2}
          alignItems={variant === "center" ? "center" : "flex-start"}
          textAlign={variant === "center" ? "center" : "left"}
        >
          {/* TITLE */}
          {title && (
            <Typography variant="h3" fontWeight={800}>
              {title}
            </Typography>
          )}

          {/* SUBTITLE */}
          {subtitle && (
            <Typography
              sx={{
                opacity: 0.85,
                maxWidth: 700,
              }}
            >
              {subtitle}
            </Typography>
          )}

          {/* ACTIONS (buttons etc) */}
          {actions && (
            <Stack direction="row" spacing={2}>
              {actions}
            </Stack>
          )}

          {/* CHILD CONTENT (filters, search, etc) */}
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