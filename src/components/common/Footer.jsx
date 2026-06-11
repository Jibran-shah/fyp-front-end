import {
  Box,
  Container,
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
        mt: 10,
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            pt: 5, // 👈 fixes "too close to top border"
            pb: 4,
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
      </Container>
    </Box>
  );
}