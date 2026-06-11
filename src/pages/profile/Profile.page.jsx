import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Button,
  CircularProgress,
  Avatar,
  Chip,
  Divider,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

import { useSelector } from "react-redux";
import { useGetFullProfile } from "../../hooks/api/profile/useGetFullProfile";
import { useMediaAssetById } from "../../hooks/api/media/media.hooks";
import { useLogout } from "../../hooks/api/auth/auth.hooks";

export default function ProfilePage() {
  const { userId } = useParams();
  const navigate = useNavigate();



  const currentUser = useSelector((state) => state.auth.user);
  const targetUserId = userId || currentUser?.id;

  const { data, isLoading, isError } = useGetFullProfile(targetUserId);
  const { mutate: logoutUser, isPending: isLoggingOut } = useLogout();


  const handleDeleteProfile = () => {
    navigate("profile/delete");
  };

  // ================= EXTRACT PROFILE =================
  const baseProfile = data?.baseProfile;
  const user = data?.user;
  const serviceProvider = data?.serviceProvider;
  const productSeller = data?.productSeller;

  // ================= MEDIA IDS =================
  const avatarId = baseProfile?.profileAvatar?.fileId;
  const coverId = baseProfile?.profileCover?.fileId;

  // ================= MEDIA HOOKS =================
  const { data: avatarAsset } = useMediaAssetById(avatarId);
  const { data: coverAsset } = useMediaAssetById(coverId);

  const avatarUrl = avatarAsset?.file?.url;
  const coverUrl = coverAsset?.file?.url;

  const handleLogout = () => {
    logoutUser(undefined, {
      onSuccess: () => {
        navigate("/login", { replace: true });
      },
    });
  };

  // ================= LOADING =================
  if (isLoading) {
    return (
      <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !data) {
    return (
      <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <Typography>Unable to load profile.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        py: 5,
        px: 2,
      }}
    >
      <Paper
        sx={{
          maxWidth: 950,
          mx: "auto",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {/* ================= COVER ================= */}
        <Box
          sx={{
            height: 260,
            position: "relative",
            backgroundImage: coverUrl ? `url(${coverUrl})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            bgcolor: "grey.300",
          }}
        >
          <Avatar
            src={avatarUrl}
            sx={{
              width: 140,
              height: 140,
              position: "absolute",
              bottom: -70,
              left: 30,
              border: "4px solid white",
            }}
          />
        </Box>

        <Box sx={{ p: 4, pt: 10 }}>
          {/* ================= HEADER ================= */}
          <Stack spacing={1}>
            <Typography variant="h4" fontWeight={700}>
              {baseProfile?.fullName || user?.userName}
            </Typography>

            <Typography color="text.secondary">
              @{user?.userName}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip
                label={user?.role || "User"}
                color="primary"
                variant="outlined"
              />

              {serviceProvider && (
                <Chip label="Service Provider" color="success" />
              )}

              {productSeller && (
                <Chip label="Seller" color="secondary" />
              )}
            </Stack>

            <Typography color="text.secondary" sx={{ maxWidth: 700 }}>
              {baseProfile?.bio || "No bio available"}
            </Typography>
          </Stack>

          <Divider sx={{ my: 4 }} />

          {/* ================= BASIC INFO ================= */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="caption">Phone</Typography>
              <Typography>{baseProfile?.phone || "-"}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="caption">Location</Typography>
              <Typography>
                {[baseProfile?.city, baseProfile?.country]
                  .filter(Boolean)
                  .join(", ") || "-"}
              </Typography>
            </Grid>
          </Grid>

          {/* ================= SERVICE PROVIDER ================= */}
          {serviceProvider && (
            <>
              <Divider sx={{ my: 4 }} />

              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    Service Provider Profile
                  </Typography>

                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {serviceProvider.title}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    {serviceProvider.description}
                  </Typography>

                  {!!serviceProvider.skills?.length && (
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      sx={{ mt: 2 }}
                    >
                      {serviceProvider.skills.map((skill) => (
                        <Chip key={skill} label={skill} size="small" />
                      ))}
                    </Stack>
                  )}

                  <Typography sx={{ mt: 2 }}>
                    ⭐ Rating: {serviceProvider.ratingAverage ?? 0}
                  </Typography>
                </CardContent>
              </Card>
            </>
          )}

          {/* ================= SELLER ================= */}
          {productSeller && (
            <>
              <Divider sx={{ my: 4 }} />

              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    Shop Profile
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    {productSeller.shopName}
                  </Typography>

                  <Typography color="text.secondary">
                    {productSeller.shopDescription}
                  </Typography>

                  <Typography sx={{ mt: 2 }}>
                    ⭐ Rating: {productSeller.ratingAverage ?? 0}
                  </Typography>

                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ mt: 1 }}
                  >
                    Products: {productSeller.totalProducts ?? 0}
                  </Typography>
                </CardContent>
              </Card>
            </>
          )}

          <Divider sx={{ my: 4 }} />

          {/* ================= ACTIONS ================= */}
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Back
            </Button>

            {user?.id && user?.id !== currentUser?.id && (
              <Button
                variant="contained"
                onClick={() => navigate(`/chats/new/${user.id}`)}
              >
                Message
              </Button>
            )}



            {currentUser?.id === user?.id && (
              <Button
                color="error"
                variant="contained"
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                {isLoggingOut ? "Logging out..." : "Logout"}
              </Button>
            )}

            {user?.id && user?.id !== currentUser?.id && (
              <Button
                variant="contained"
                onClick={handleDeleteProfile}
              >
                Delete
              </Button>
            )}
            
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}