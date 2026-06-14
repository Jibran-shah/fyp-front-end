import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Chip,
  CircularProgress,
  Divider,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useGetProductById } from "../../hooks/api/products/products.hooks";
import ImageCarousel from "../../components/common/ImageCarousel";
import { useMarketplaceProductActions } from "../../hooks/ui/marketplace/useMarketplaceProductActions";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../utils/queryKeys";
import ReviewBox from "../../components/page/reviews/ReviewBox";
import { REVIEW_ENTITYS } from "../../../../backend/constants/review.constants";

// 👇 ADD THIS HOOK
import { useCreateDirectChat } from "../../hooks/api/directChats/directChats.hooks";

export default function ProductDetailsPage({ isOwner = false }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, isLoading, isError } = useGetProductById(id);
  const { mutate: createChat, isPending: isChatCreating } =
    useCreateDirectChat();

  const [openChatModal, setOpenChatModal] = useState(false);

  const { handleAddToCart: onAddToCart } = useMarketplaceProductActions();

  if (isLoading) {
    return (
      <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !data) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography color="error">Failed to load product</Typography>
      </Box>
    );
  }

  const product = data;
  const seller = product?.seller;

  const sellerProfile = seller?.user?.baseProfile;

  const imageUrls =
    product.images?.map((img) => img?.file?.url).filter(Boolean) || [];

  const handleAddToCart = (e) => {
    e.stopPropagation();

    toast.info(
      "Product added to cart. Clicking again will increase quantity"
    );

    queryClient.invalidateQueries(queryKeys.cart.detail());
    onAddToCart(product);
  };

  /* -------------------- OPEN CONFIRM MODAL -------------------- */
  const handleMessageSellerClick = () => {
    if (!seller?._id) return;
    setOpenChatModal(true);
  };

  /* -------------------- CREATE CHAT -------------------- */
  const handleConfirmChat = () => {
    if (!seller?._id) return;

    createChat(
      { userId: seller._id },
      {
        onSuccess: (data) => {
          toast.success("Chat created successfully");

          const chatId = data?._id;

          setOpenChatModal(false);

          navigate(`/chats/${chatId}`);
        },
        onError: () => {
          toast.error("Failed to create chat");
        },
      }
    );
  };

  return (
    <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ width: "100%", maxWidth: 1100, p: 3, borderRadius: 3 }}>
        <Stack spacing={3}>
          {/* IMAGE */}
          <ImageCarousel images={imageUrls || []} />

          {/* TITLE */}
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4">{product.name}</Typography>

            <Chip label={product.status} />
          </Stack>

          <Divider />

          {/* SELLER */}
          {sellerProfile && (
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src={sellerProfile.profileAvatar || ""}>
                {sellerProfile.fullName?.charAt(0)}
              </Avatar>

              <Typography fontWeight={500}>
                {sellerProfile.fullName || "Unknown Seller"}
              </Typography>
            </Stack>
          )}

          <Divider />

          {/* ACTIONS */}
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Buy Now</Button>

            <Button variant="outlined" onClick={handleAddToCart}>
              Add to Cart
            </Button>

            {seller?._id && (
              <Button variant="outlined" onClick={handleMessageSellerClick}>
                Message Seller
              </Button>
            )}

            {isOwner && (
              <Button variant="outlined" color="warning">
                Edit Product
              </Button>
            )}
          </Stack>
        </Stack>

        {/* REVIEWS */}
        <ReviewBox
          entityId={product._id}
          entityType={REVIEW_ENTITYS.PRODUCT}
        />
      </Paper>

      {/* -------------------- CHAT CONFIRM MODAL -------------------- */}
      <Dialog
        open={openChatModal}
        onClose={() => setOpenChatModal(false)}
      >
        <DialogTitle>Start Conversation</DialogTitle>

        <DialogContent>
          <Typography>
            Do you want to open a direct chat with{" "}
            <b>{sellerProfile?.fullName || "this seller"}</b>?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenChatModal(false)}>
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleConfirmChat}
            disabled={isChatCreating}
          >
            {isChatCreating ? "Creating..." : "Yes, Continue"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}