import {
  Box,
  Paper,
  Stack
} from "@mui/material";

import ProviderProfileCard from "../../components/provider/ProviderProfileCard";
import ProviderProfileActions from "../../components/provider/ProviderProfileActions";

export default function ProviderProfilePage() {
  const provider = {
    title: "Professional Title",
    description: "Provider description goes here",
    skills: ["React", "Node.js", "MongoDB"],
    experienceYears: 0,
    rating: 0,
    fullAddress: "Address",
    isApproved: false
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={3}>
          <ProviderProfileCard
            provider={provider}
          />

          <ProviderProfileActions
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </Stack>
      </Paper>
    </Box>
  );
}