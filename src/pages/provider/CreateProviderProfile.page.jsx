import {
  Box,
  Paper,
  Typography
} from "@mui/material";

import ProviderProfileForm from "../../components/provider/ProviderProfileForm";

export default function CreateProviderProfilePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a"
      }}
    >
      <Paper
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 700
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          mb={3}
        >
          Create Service Provider Profile
        </Typography>

        <ProviderProfileForm
          mode="create"
        />
      </Paper>
    </Box>
  );
}