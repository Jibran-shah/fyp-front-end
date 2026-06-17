import { Box, Grid, Typography, Stack, Paper } from "@mui/material";

export default function AboutUsSection() {
  return (
      <Grid container spacing={6} alignItems="center" sx={{position:"relative"}}>
        {/* LEFT SIDE */}
        <Grid item xs={12} md={6} >
          <Stack spacing={3}>
            {/* HEADER */}
            <Box>
              <Typography variant="h3" fontWeight={900}>
                About Our Marketplace
              </Typography>

              <Typography
                variant="body1"
                sx={{ opacity: 0.7, mt: 1, lineHeight: 1.7 }}
              >
                We’re building a modern marketplace where people can buy,
                sell, and offer services with complete trust and simplicity.
              </Typography>
            </Box>

            {/* STORY CARDS */}
            <Stack spacing={2}>
              {[
                {
                  title: "🚀 Our Mission",
                  desc: "Empower individuals and small businesses to grow online without barriers.",
                },
                {
                  title: "🤝 Our Vision",
                  desc: "Build a trusted ecosystem where local commerce becomes effortless and fair.",
                },
                {
                  title: "🌍 Who We Serve",
                  desc: "From freelancers to shop owners — anyone can start earning online.",
                },
              ].map((item, i) => (
                <Paper
                  key={i}
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.06)",
                    transition: "0.25s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <Typography fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {item.desc}
                  </Typography>
                </Paper>
              ))}
            </Stack>

          </Stack>
        </Grid>

        {/* RIGHT SIDE (FIXED + CLEAN TRUST UI) */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: 420,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack spacing={3} sx={{ width: "100%", maxWidth: 380 }}>

              {/* MAIN TRUST CARD */}
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 5,
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, rgba(25,118,210,0.15), rgba(255,255,255,0.7))",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <Typography variant="h5" fontWeight={900}>
                  Trusted Marketplace
                </Typography>

                <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                  Secure payments • Verified users • Protected transactions
                </Typography>
              </Paper>

              {/* SUPPORT CARDS */}
              <Stack direction="row" spacing={2}>
                <Paper
                  elevation={0}
                  sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: 4,
                    textAlign: "center",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <Typography fontWeight={800}>
                    🔒 Secure
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    Payments
                  </Typography>
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: 4,
                    textAlign: "center",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <Typography fontWeight={800}>
                    ⚡ Fast
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    Payouts
                  </Typography>
                </Paper>
              </Stack>

            </Stack>
          </Box>
        </Grid>

      </Grid>
  );
}