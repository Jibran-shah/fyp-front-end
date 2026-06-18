import { Grid, Box } from "@mui/material";
import InfoContent from "./InfoContent";
import DraggableImageStack from "./DraggableImageStack";

export default function InteractiveInfoSection({
  title,
  subtitle,
  description,
  features,
  primaryButton,
  secondaryButton,
  images = [],
  reverse = false,
}) {
  return (
    <Grid
      container
      spacing={6}
      alignItems="space-between"
      justifyContent="space-between"
      direction={reverse ? "row-reverse" : "row"}
      sx={{
        width: "100%",
      }}
    >
      {/* LEFT */}
      <Grid item xs={12} md={6}>
        <InfoContent
          title={title}
          subtitle={subtitle}
          description={description}
          features={features}
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
        />
      </Grid>

      {/* RIGHT — FIXED ALIGNMENT */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: reverse ? "flex-start" : "flex-end", // 🔥 KEY FIX
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: reverse ? "flex-start" : "flex-end",
            width: "100%",
          }}
        >
          <DraggableImageStack images={images} />
        </Box>
      </Grid>
    </Grid>
  );
}