import { Box } from "@mui/material";

export default function PageContainer({ children, center = false }) {
  return (
    <Box
      sx={{
        width: "100%",

        // 🔥 layout
        display: "flex",
        flexDirection: "column",

        // 🔥 spacing between children (WORKS ALWAYS)
        gap: "50px",

        // optional centering
        ...(center && {
          alignItems: "center",
          textAlign: "center",
        }),
        px:"16px",
        py:"12px"
      }}
    >
      {children}
    </Box>
  );
}