import { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function MasterDetailLayout({
  sidebar,
  main,
  hasSelection,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    if (isMobile && hasSelection) {
      setShowMain(true);
    }
  }, [hasSelection, isMobile]);

  const openMain = () => setShowMain(true);
  const closeMain = () => setShowMain(false);

  if (!isMobile) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        {typeof sidebar === "function"
          ? sidebar(openMain)
          : sidebar}

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          {main}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      {!showMain ? (
        typeof sidebar === "function"
          ? sidebar(openMain)
          : sidebar
      ) : (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              p: 1,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <IconButton onClick={closeMain}>
              <ArrowBackIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flex: 1,
              minHeight: 0,
            }}
          >
            {main}
          </Box>
        </Box>
      )}
    </Box>
  );
}