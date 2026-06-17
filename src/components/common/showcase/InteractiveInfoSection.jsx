import { Box, Grid } from "@mui/material"
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
        alignItems="center"
        direction={reverse ? "row-reverse" : "row"}
        sx={{
            width: "100%",
        }}
    >
        {/* LEFT */}
        <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%" }}>
            <InfoContent
                title={title}
                subtitle={subtitle}
                description={description}
                features={features}
                primaryButton={primaryButton}
                secondaryButton={secondaryButton}
            />
            </Box>
        </Grid>

        {/* RIGHT */}
        <Grid item xs={12} md={6}>
            <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
            >
            <DraggableImageStack images={images} />
            </Box>
        </Grid>
    </Grid>
  );
}