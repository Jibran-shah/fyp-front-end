import {
  Stack,
  Button
} from "@mui/material";

export default function SellerProfileActions({
  onEdit,
  onDelete
}) {
  return (
    <Stack
      direction="row"
      spacing={2}
    >
      <Button
        variant="contained"
        onClick={onEdit}
      >
        Edit Profile
      </Button>

      <Button
        color="error"
        variant="outlined"
        onClick={onDelete}
      >
        Delete Profile
      </Button>
    </Stack>
  );
}