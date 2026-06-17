import {
  Box,
  Paper,
  Typography,
  Stack,
  Divider,
} from "@mui/material";

/**
 * selectedItem example:
 * {
 *   label: "Chats",
 *   description: "Your conversations",
 *   icon: <Icon />
 * }
 */
export default function DashboardMain({
  selectedItem,
  fallbackTitle = "Dashboard",
  fallbackDescription = "Select an option from the sidebar",
  children,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        flex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 3,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Stack spacing={0.5}>
          <Typography variant="h5" fontWeight={700}>
            {selectedItem?.label || fallbackTitle}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {selectedItem?.description ||
              fallbackDescription}
          </Typography>
        </Stack>
      </Box>

      <Divider />

      {/* Content */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 3,
        }}
      >
        {selectedItem?.content ? (
          selectedItem.content
        ) : children ? (
          children
        ) : (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            <Typography>
              {fallbackDescription}
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
}