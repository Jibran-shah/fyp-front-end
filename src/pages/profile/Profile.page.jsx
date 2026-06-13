import { Box, Paper, CircularProgress, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useGetFullProfile } from "../../hooks/api/profile/buyerProfile.hooks";
import { useLogout } from "../../hooks/api/auth/auth.hooks";
import { logout } from "../../store/slices/auth.slice";


import ProfileHeader from "../../components/page/profile/profileHeader";
import ProfileInfoCard from "../../components/page/profile/ProfileInfoCard";
import ServiceProviderCard from "../../components/page/profile/ServiceProviderCard";
import SellerCard from "../../components/page/profile/SellerCard";
import ProfileActionsBar from "../../components/page/profile/ProfileActionsBar";

export default function ProfilePage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((s) => s.auth.user);
  const targetUserId = userId || currentUser?.id;
  const isOwnProfile = currentUser?.id === targetUserId;

  const { data, isLoading, isError } = useGetFullProfile(targetUserId);
  const { mutate: logoutUser, isPending } = useLogout();

  if (isLoading) return <CircularProgress />;
  if (isError || !data) return <Typography>Error loading profile</Typography>;

  const { baseProfile, user, serviceProvider, productSeller } = data;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 4,px:4 }}>
      <Paper sx={{ maxWidth: 900, mx: "auto", borderRadius: 4, overflow: "hidden" }}>
        
        <ProfileHeader
          coverUrl={baseProfile?.profileCover?.file?.url}
          avatarUrl={baseProfile?.profileAvatar?.file?.url}
          baseProfile={baseProfile}
          user={user}
          serviceProvider={serviceProvider}
          productSeller={productSeller}
        />

        <Box sx={{ p: 3, pt: 10, display: "flex", flexDirection: "column", gap: 2 }}>
          
          <ProfileInfoCard baseProfile={baseProfile} />

          <ServiceProviderCard
            serviceProvider={serviceProvider}
            isOwnProfile={isOwnProfile}
            onEdit={() => navigate("/provider/edit")}
            onDelete={() => navigate("/provider/delete")}
            onCreate={() => navigate("/provider/create")}
          />

          <SellerCard
            productSeller={productSeller}
            isOwnProfile={isOwnProfile}
            onEdit={() => navigate("/seller/edit")}
            onDelete={() => navigate("/seller/delete")}
            onCreate={() => navigate("/seller/create")}
          />

          <ProfileActionsBar
            isOwnProfile={isOwnProfile}
            userId={user?.id}
            currentUserId={currentUser?.id}
            isLoggingOut={isPending}
            onBack={() => navigate(-1)}
            onMessage={() => navigate(`/chats/new/${user.id}`)}
            onLogout={() =>
              logoutUser(undefined, {
                onSuccess: () => {
                  dispatch(logout());
                  navigate("/login", { replace: true });
                },
              })
            }
            onDelete={() => {
              dispatch(logout());
              navigate("/profile/delete");
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}