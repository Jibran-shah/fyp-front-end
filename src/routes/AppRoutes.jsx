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
import ProductCreatePage from "../pages/products/ProductCreate.page";

import ServicesPage from "../pages/services/Services.page";
import ServiceDetailsPage from "../pages/services/ServiceDetails.page";

import CreateProfilePage from "../pages/profile/CreateProfile.page";
import CartPage from "../pages/cart/CartPage";

import ChatPage from "../pages/chat/Chat.page";
import ChatsPage from "../pages/chat/Chats.page"


import CreateServiceProviderPage from "../pages/provider/CreateProviderProfile.page"
import EditServiceProviderPage from "../pages/provider/EditProviderProfile.page"
import DeleteServiceProviderPage from "../pages/provider/DeleteProviderProfile.page"

import CreateSellerProfile from "../pages/seller/CreateSellerProfile.page"
import EditSellerProfile from "../pages/seller/EditSellerProfile.page"
import DeleteSellerProfile from "../pages/seller/DeleteSellerProfile.page"

/* =========================
   BOOKINGS
========================= */
import CreateBookingPage from "../pages/bookings/CreateBooking.page";
import EmailVerificationGate from "../pages/auth/EmailVerificationGate.page";
import EmailNotVerifiedGate from "../pages/auth/EmailNotVerifiedGate.page";
import Layout from "./layout";

import CategoryCreatePage from "../pages/categories/CreateCategory.page";
import ProductSearchPage from "../pages/products/ProductsSearchPage";
import CreateServicePage from "../pages/services/CreateService.page";
import ServicesSearchPage from "../pages/services/ServicesSearch.page";


export default function AppRoutes() {
  return (
    <Routes>
      {/* AUTH ROUTES (NO LAYOUT) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/emailVerificationGate" element={<EmailVerificationGate />} />
      <Route path="/emailNotVerifiedGate" element={<EmailNotVerifiedGate />} />
      <Route path="/profile/create" element={<CreateProfilePage />} />

      {/* ROUTES WITH LAYOUT */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<DashboardEntryPage />} />

        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/create" element={<ProductCreatePage/>}/>
        <Route path="/products/search" element={<ProductSearchPage/>}/>
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/create" element={<CreateServicePage />} />
        <Route path="/services/search" element={<ServicesSearchPage/>}/>
        <Route path="/services/:id" element={<ServiceDetailsPage />} />

        <Route
          path="/book/:serviceId/:serviceProviderId"
          element={<CreateBookingPage />}
        />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        <Route path="/profile/delete" element={<DeleteProfilePage />} />

        <Route
          path="/provider/create"
          element={<CreateServiceProviderPage />}
        />
        <Route
          path="/provider/edit"
          element={<EditServiceProviderPage />}
        />
        <Route
          path="/provider/delete"
          element={<DeleteServiceProviderPage />}
        />

        <Route
          path="/seller/create"
          element={<CreateSellerProfile/>}
        />
        <Route
          path="/seller/edit"
          element={<EditSellerProfile />}
        />
        <Route
          path="/seller/delete"
          element={<DeleteSellerProfile />}
        />

        <Route path="/chats" element={<ChatsPage />} />
        <Route path="/chats/:id" element={<ChatPage />} />


        <Route path="/category/create" element={<CategoryCreatePage/>}/>

        <Route path="/unauthorized" element={<UnauthorizedPage />} />
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}