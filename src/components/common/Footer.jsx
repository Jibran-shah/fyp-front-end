import {
  Box,
  Stack,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";

import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  GitHub,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        py:"12px",
        px:"16px"
      }}
    >
        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
        >
          {/* BRAND */}
          <Typography variant="h5" fontWeight={800}>
            TaskMart
          </Typography>

          {/* TAGLINE */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: 500 }}
          >
            Buy products, hire professionals, and manage services
            from a single trusted marketplace.
          </Typography>

          {/* SOCIAL LINKS */}
          <Stack direction="row" spacing={1}>
            <IconButton>
              <Facebook />
            </IconButton>

            <IconButton>
              <Twitter />
            </IconButton>

            <IconButton>
              <Instagram />
            </IconButton>

            <IconButton>
              <LinkedIn />
            </IconButton>

            <IconButton>
              <GitHub />
            </IconButton>
          </Stack>

          <Divider flexItem sx={{ width: "100%", maxWidth: 400 }} />

          {/* COPYRIGHT */}
          <Typography
            variant="body2"
            color="text.secondary"
          >
            © {new Date().getFullYear()} TaskMart. All rights
            reserved.
          </Typography>
        </Stack>
    </Box>
  );
}