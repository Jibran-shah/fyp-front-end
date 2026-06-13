import { Stack, Button } from "@mui/material";

export default function ProfileActionsBar({
  isOwnProfile,
  onBack,
  onMessage,
  onLogout,
  onDelete,
  isLoggingOut,
  userId,
  currentUserId,
}) {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mt: 3 }}>
      <Button variant="outlined" onClick={onBack}>
        Back
      </Button>

      {userId !== currentUserId && (
        <Button variant="contained" onClick={onMessage}>
          Message
        </Button>
      )}

      {isOwnProfile && (
        <>
          <Button
            color="error"
            variant="contained"
            onClick={onLogout}
            disabled={isLoggingOut}
          >
            Logout
          </Button>

          <Button color="warning" variant="outlined" onClick={onDelete}>
            Delete Profile
          </Button>
        </>
      )}
    </Stack>
  );
}