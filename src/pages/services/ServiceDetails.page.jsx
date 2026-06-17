import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Chip,
  Avatar,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDeleteService, useService } from "../../hooks/api/services/services.hooks";
import ReviewBox from "../../components/page/reviews/ReviewBox";
import { REVIEW_ENTITYS } from "../../../../backend/constants/review.constants";
import { useSelector } from "react-redux";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { mutate: deleteService, isPending: deleting } =
    useDeleteService();

  const { data: service, isLoading, isError } = useService(id);

  const [openConfirm, setOpenConfirm] = useState(false);

  const handleBook = () => navigate(`/booking/create/${id}`);
  const handleEdit = () => navigate(`/services/update/${id}`);

  const handleDelete = () => setOpenConfirm(true);

  const confirmDelete = () => {
    deleteService(id, {
      onSuccess: () => {
        setOpenConfirm(false);
        navigate("/services");
      },
    });
  };

  if (isLoading) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (isError || !service) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography color="error">
          Failed to load service
        </Typography>
      </Box>
    );
  }

  const provider = service?.provider;
  const baseProfile = provider?.user?.baseProfile;

  const isOwn =
    service?.provider?._id === user?.serviceProvider;

  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 800, borderRadius: 3 }}>
        {/* HEADER */}
        <Stack spacing={1.5}>
          <Typography variant="h4" fontWeight={700}>
            {service.name}
          </Typography>

          <Stack direction="row" spacing={1}>
            <Chip
              size="small"
              label={service.isAvailable ? "Available" : "Unavailable"}
              color={service.isAvailable ? "success" : "default"}
            />

            <Chip
              size="small"
              label={service.status || "Active"}
              variant="outlined"
            />
          </Stack>

          <Divider sx={{ my: 1 }} />

          {/* PROVIDER */}
          {provider && (
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ p: 2, borderRadius: 2, bgcolor: "action.hover" }}
            >
              <Avatar
                src={baseProfile?.profileAvatar?.file?.url}
                sx={{ width: 56, height: 56 }}
              />

              <Box>
                <Typography fontWeight={700}>
                  {provider.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {baseProfile?.fullName || "Service Provider"}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  ⭐ {provider.ratingAverage?.toFixed(1) || "0"} ·{" "}
                  {provider.ratingCount || 0} reviews
                </Typography>
              </Box>
            </Stack>
          )}

          <Divider sx={{ my: 1 }} />

          {/* DESCRIPTION */}
          <Box>
            <Typography fontWeight={600} gutterBottom>
              About Service
            </Typography>

            <Typography color="text.secondary">
              {service.description}
            </Typography>
          </Box>

          {/* INFO */}
          <Stack spacing={1}>
            <Typography>
              <strong>Category:</strong>{" "}
              {service.category?.name || "No category"}
            </Typography>

            <Typography>
              <strong>Price:</strong> Rs. {service.price}
            </Typography>

            <Typography>
              <strong>Duration:</strong> {service.durationHours} Hours
            </Typography>

            <Typography>
              <strong>Bookings:</strong> {service.bookingsCount ?? 0}
            </Typography>

            <Typography>
              <strong>Rating:</strong> {service.rating ?? "N/A"}
            </Typography>

            <Typography>
              <strong>Address:</strong>{" "}
              {service.fullAddress || "Not provided"}
            </Typography>
          </Stack>

          <Divider sx={{ my: 2 }} />

          {/* ACTIONS */}
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={handleBook}
              sx={{ borderRadius: 2 }}
            >
              Book Service
            </Button>

            {isOwn && (
              <>
                <Button
                  variant="outlined"
                  onClick={handleEdit}
                  sx={{ borderRadius: 2 }}
                >
                  Edit
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDelete}
                  sx={{ borderRadius: 2 }}
                >
                  Delete
                </Button>
              </>
            )}
          </Stack>

          <ReviewBox
            entityId={service._id}
            entityType={REVIEW_ENTITYS.SERVICE}
          />
        </Stack>
      </Paper>

      {/* ================= CONFIRM DELETE MODAL ================= */}
      <Dialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
      >
        <DialogTitle>Delete Service?</DialogTitle>

        <DialogContent>
          <Typography>
            This action cannot be undone. Are you sure you want to
            delete this service?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setOpenConfirm(false)}
            disabled={deleting}
          >
            Cancel
          </Button>

          <Button
            color="error"
            variant="contained"
            onClick={confirmDelete}
            disabled={deleting}
          >
            {deleting ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}