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

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import { useGetProductById, useDeleteProduct } from "../../hooks/api/products/products.hooks";
import ImageCarousel from "../../components/common/ImageCarousel";
import { useMarketplaceProductActions } from "../../hooks/ui/marketplace/useMarketplaceProductActions";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../utils/queryKeys";
import ReviewBox from "../../components/page/reviews/ReviewBox";
import { REVIEW_ENTITYS } from "../../../../backend/constants/review.constants";
import { useCreateDirectChat } from "../../hooks/api/directChats/directChats.hooks";
import PageContainer from "../../components/common/layout/pageContainer/PageContainer";

export default function ProductDetailsPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);

  const [openDelete, setOpenDelete] = useState(false);

  const { data, isLoading, isError } = useGetProductById(id);
  const { mutate: deleteProduct, isPending: isDeleting } = useDeleteProduct();

  const { mutate: createChat } =
    useCreateDirectChat();

  const { handleAddToCart: onAddToCart } =
    useMarketplaceProductActions();

  if (isLoading) {
    return (
      <Box sx={{ minHeight: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
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

  const currentUserId = user?.id || user?._id;
  const sellerUserId = seller?.user?._id;

  const isMyProduct = String(currentUserId) === String(sellerUserId);

  const handleProductEdit = () => {
    navigate(`/products/update/${product._id || product.id}`);
  };

  const handleDelete = () => {
    deleteProduct(product._id, {
      onSuccess: () => {
        toast.success("Product deleted successfully");
        navigate("/products");
      },
      onError: () => {
        toast.error("Failed to delete product");
      },
    });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);

    queryClient.invalidateQueries(queryKeys.cart.detail());
    toast.success("Added to cart");
  };

  const handleMessageSeller = () => {
    if (!seller?.user?._id) return;

    createChat(
      { userId: seller.user._id },
      {
        onSuccess: (chat) => {
          const chatId = chat?._id || chat?.id;

          if (!chatId) {
            toast.error("Unable to open chat");
            return;
          }

          navigate(`/chats/${chatId}`);
        },
        onError: () => toast.error("Failed to open chat"),
      }
    );
  };

  return (
    <PageContainer>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 1100,
          borderRadius: 4,
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Stack spacing={3} sx={{ p: 3 }}>
          <ImageCarousel images={imageUrls} />

          <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between">
            <Box>
              <Typography variant="h4" fontWeight={700}>
                {product.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </Box>

            <Chip label={product.status} color={product.status === "active" ? "success" : "default"} />
          </Stack>

          <Divider />

          <Typography variant="h4" fontWeight={800} color="primary.main">
            PKR {product.price?.toLocaleString()}
          </Typography>

          <Divider />

          {/* SELLER */}
          {sellerProfile && (
            <Paper sx={{ p: 2, border: "1px solid", borderColor: "divider" }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={sellerProfile.profileAvatar || ""}>
                  {sellerProfile.fullName?.charAt(0)}
                </Avatar>

                <Box>
                  <Typography fontWeight={700}>
                    {sellerProfile.fullName}
                  </Typography>
                  <Typography variant="body2">Seller</Typography>
                </Box>
              </Stack>
            </Paper>
          )}

          {/* ACTIONS */}
          {!isMyProduct && (
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                startIcon={<ShoppingCartOutlinedIcon />}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>

              <Button
                variant="outlined"
                startIcon={<ChatBubbleOutlineOutlinedIcon />}
                onClick={handleMessageSeller}
              >
                Message Seller
              </Button>
            </Stack>
          )}

          {/* OWNER ACTIONS */}
          {isMyProduct && (
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="warning"
                startIcon={<EditOutlinedIcon />}
                onClick={handleProductEdit}
              >
                Edit
              </Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteOutlineIcon />}
                onClick={() => setOpenDelete(true)}
              >
                Delete
              </Button>
            </Stack>
          )}
        </Stack>

        <Box sx={{ px: 3, pb: 3 }}>
          <ReviewBox
            entityId={product._id}
            entityType={REVIEW_ENTITYS.PRODUCT}
          />
        </Box>
      </Paper>

      {/* ================= DELETE CONFIRM MODAL ================= */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>Delete Product</DialogTitle>

        <DialogContent>
          Are you sure you want to delete this product? This action cannot be undone.
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenDelete(false)}>Cancel</Button>

          <Button
            color="error"
            variant="contained"
            disabled={isDeleting}
            onClick={handleDelete}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
}