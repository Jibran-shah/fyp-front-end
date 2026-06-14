import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ImageCarousel({
  images = [],
  height = { xs: 280, md: 420 },
  borderRadius = 2,
}) {
  const [index, setIndex] = useState(0);

  if (!images.length) {
    return (
      <Box
        sx={{
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5",
          borderRadius,
        }}
      >
        No Images
      </Box>
    );
  }

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>

      {/* IMAGE */}
      <Box
        sx={{
          height,
          borderRadius,
          overflow: "hidden",
          backgroundColor: "#eee",
        }}
      >
        <img
          src={images[index]}
          alt={`image-${index}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* LEFT */}
      <IconButton
        onClick={prev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.4)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      {/* RIGHT */}
      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.4)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ChevronRightIcon />
      </IconButton>

      {/* DOTS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: 1,
        }}
      >
        {images.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              cursor: "pointer",
              bgcolor: i === index ? "primary.main" : "#ccc",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}