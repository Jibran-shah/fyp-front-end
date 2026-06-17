import {
  Box,
  Paper,
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

/**
 * items: [
 *   { label, path, icon, onClick }
 * ]
 */
export default function DashboardSidebar({
  title,
  subtitle,
  items = [],
  header,
  footer,
  onSelect,
}) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.onClick) {
      item.onClick(item);
      return;
    }

    if (item.path) {
      navigate(item.path);
    }

    onSelect?.(item);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: 280,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      {/* Header */}
      <Box sx={{ p: 2 }}>
        {header || (
          <Stack spacing={0.5}>
            <Typography fontWeight={700}>
              {title || "Dashboard"}
            </Typography>

            {subtitle && (
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {subtitle}
              </Typography>
            )}
          </Stack>
        )}
      </Box>

      <Divider />

      {/* Items */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: 1,
          py: 1,
        }}
      >
        <List dense>
          {items.map((item, index) => (
            <ListItemButton
              key={item.label + index}
              onClick={() => handleClick(item)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
              }}
            >
              {item.icon && (
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {item.icon}
                </ListItemIcon>
              )}

              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Footer */}
      {footer && (
        <>
          <Divider />
          <Box sx={{ p: 2 }}>{footer}</Box>
        </>
      )}
    </Paper>
  );
}