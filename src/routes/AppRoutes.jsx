import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/auth/Login.page";
import RegisterPage from "../pages/auth/Register.page";
import ForgotPasswordPage from "../pages/auth/ForgotPassword.page";
import VerifyOtpPage from "../pages/auth/VerifyOtp.page";
import ResetPasswordPage from "../pages/auth/ResetPassword.page";
import VerifyEmailPage from "../pages/auth/VerifyEmail.page";
import UnauthorizedPage from "../pages/Unauthorized.page";

import BuyerDashboard from "../pages/dashboard/BuyerDashboard.page";
import SellerDashboard from "../pages/dashboard/SellerDashboard.page";
import ProviderDashboard from "../pages/dashboard/ProviderDashboard.page";

import ProfilePage from "../pages/profile/Profile.page";
import EditProfilePage from "../pages/profile/EditProfile.page";
import DeleteProfilePage from "../pages/profile/DeleteProfile.page";

import DashboardEntryPage from "../pages/dashboard/DashboardEntry.page";
import HomePage from "../pages/Home.page";

import ProductsPage from "../pages/products/Products.page";
import ProductDetailsPage from "../pages/products/ProductDetails.page";

import ServicesPage from "../pages/services/Services.page";
import ServiceDetailsPage from "../pages/services/ServiceDetails.page";

import CreateProfilePage from "../pages/profile/CreateProfile.page";
import CartPage from "../pages/cart/CartPage";

import ChatPage from "../pages/chat/Chat.page";
import ChatsPage from "../pages/chat/Chats.page"

/* =========================
   BOOKINGS
========================= */
import CreateBookingPage from "../pages/bookings/CreateBooking.page";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ROOT */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />

      {/* AUTH */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />

      {/* DASHBOARD */}
      <Route path="/dashboard" element={<DashboardEntryPage />} />

      {/* CART */}
      <Route path="/cart" element={<CartPage />} />

      {/* PRODUCTS */}
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />

      {/* SERVICES */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:id" element={<ServiceDetailsPage />} />

      {/* ✅ BOOKING FLOW (FIXED) */}
      <Route
        path="/book/:serviceId/:serviceProviderId"
        element={<CreateBookingPage />}
      />

      {/* ROLES */}
      <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
      <Route path="/seller/dashboard" element={<SellerDashboard />} />
      <Route path="/provider/dashboard" element={<ProviderDashboard />} />

      {/* PROFILE */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/create" element={<CreateProfilePage />} />
      <Route path="/profile/edit" element={<EditProfilePage />} />
      <Route path="/profile/delete" element={<DeleteProfilePage />} />

      <Route path="/chats" element={<ChatsPage/>} />
      <Route path="/chats/:id" element={<ChatPage/>} />


      {/* ERROR */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}