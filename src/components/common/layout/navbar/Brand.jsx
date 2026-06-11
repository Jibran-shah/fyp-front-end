import { Typography, Stack, Box } from "@mui/material";

export default function Brand({ onClick }) {
  return (
    <Stack
      direction="row"
      spacing={1.2}
      alignItems="center"
      onClick={onClick}
      sx={{
        cursor: "pointer",
        userSelect: "none",
        px: 1,
        py: 0.5,
        borderRadius: 2,
        transition: "0.2s",
        "&:hover": {
          backgroundColor: "rgba(37, 99, 235, 0.08)",
        },
      }}
    >
      {/* LOGO MARK */}
      <Box
        sx={{
          width: 34,
          height: 34,
          borderRadius: 2,
          background: "linear-gradient(135deg,#2563eb,#7c3aed)",
          boxShadow: "0 4px 12px rgba(37,99,235,0.25)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          flexShrink: 0, // prevents distortion

          position: "relative",
          overflow: "hidden",

          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)",
          },
        }}
      />

      {/* TEXT */}
      <Typography
        fontWeight={800}
        letterSpacing={0.6}
        sx={{
          fontSize: "1.05rem",
          lineHeight: 1, // 🔥 IMPORTANT FIX
          display: "flex",
          alignItems: "center",
          color: "text.primary",
        }}
      >
        TaskMart
      </Typography>
    </Stack>
  );
}