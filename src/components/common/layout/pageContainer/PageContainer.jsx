import { Box } from "@mui/material";
import { pageContainerStyles as s } from "./PageContainer.styles";

export default function PageContainer({ children, center = false }) {
  return (
    <Box sx={{ ...s.base, ...(center ? s.center : {}) }}>
      {children}
    </Box>
  );
}