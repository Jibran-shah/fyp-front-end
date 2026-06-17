import { Box, Grid, Typography, Stack, Paper } from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";
import PaymentsIcon from "@mui/icons-material/Payments";
import ShieldIcon from "@mui/icons-material/Shield";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export default function PaymentTrustSection() {
  const items = [
    {
      icon: <ShieldIcon />,
      title: "Secure Transactions",
      desc: "End-to-end encrypted payments protected with industry-grade security.",
    },
    {
      icon: <PaymentsIcon />,
      title: "Escrow Protection",
      desc: "Funds are held safely until both parties confirm satisfaction.",
    },
    {
      icon: <SecurityIcon />,
      title: "Fraud Prevention",
      desc: "AI-powered systems detect and block suspicious activity in real time.",
    },
    {
      icon: <VerifiedUserIcon />,
      title: "Verified Users",
      desc: "Only verified buyers and sellers can participate in transactions.",
    },
  ];

  return (
      <Stack spacing={6} textAlign="center">

        {/* HEADER */}
        <Box>
          <Typography variant="h3" fontWeight={900}>
            Payments You Can Trust
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.7,
              maxWidth: 650,
              mx: "auto",
              mt: 2,
            }}
          >
            Every transaction is secured, monitored, and protected — so you can
            buy and sell with complete confidence.
          </Typography>
        </Box>

        {/* FEATURE GRID */}
        <Grid container spacing={3}>
          {items.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor: "background.paper",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "all 0.25s ease",
                  position: "relative",
                  overflow: "hidden",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  },
                }}
              >
                {/* ICON BADGE */}
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    background:
                      "linear-gradient(135deg, rgba(25,118,210,0.15), rgba(25,118,210,0.05))",
                    color: "primary.main",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography variant="h6" fontWeight={800}>
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.7,
                    mt: 1,
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CENTER TRUST BADGE */}
        <Box
          sx={{
            mt: 4,
            p: 3,
            borderRadius: 4,
            display: "inline-block",
            mx: "auto",
            background:
              "linear-gradient(135deg, rgba(25,118,210,0.08), rgba(0,0,0,0.02))",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <Typography fontWeight={700}>
            🔒 Secure Escrow • Verified Users • Protected Payments
          </Typography>
        </Box>

      </Stack>
  );
}