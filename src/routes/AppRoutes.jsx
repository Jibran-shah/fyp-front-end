import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/auth/Login.page";
import RegisterPage from "../pages/auth/Register.page";
import ForgotPasswordPage from "../pages/auth/ForgotPassword.page";
import VerifyOtpPage from "../pages/auth/VerifyOtp.page";
import ResetPasswordPage from "../pages/auth/ResetPassword.page";
import VerifyEmailPage from "../pages/auth/VerifyEmail.page";
import UnauthorizedPage from "../pages/Unauthorized.page";

//import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

import BuyerDashboard from "../pages/buyer/BuyerDashboard.page";
import SellerDashboard from "../pages/seller/SellerDashboard.page";
import ProviderDashboard from "../pages/provider/ProviderDashboard.page";

import ProfilePage from "../pages/profile/Profile.page";
import EditProfilePage from "../pages/profile/EditProfile.page";
import DeleteProfilePage from "../pages/profile/DeleteProfile.page";

import DashboardEntryPage from "../pages/dashboard/DashboardEntry.page";
import HomePage from "../pages/Home.page";
import ProductsPage from "../pages/products/Products.page";
import ServicesPage from "../pages/services/Services.page";
import CreateProfilePage from "../pages/profile/CreateProfile.page";





export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/home" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />

      <Route path="/dashboard" element={<DashboardEntryPage />} />

      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/services" element={<ServicesPage/>} />

      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* <Route element={<ProtectedRoute />}> */}
        
        <Route element={<RoleRoute allowedRoles={["buyer"]} />}>
          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        </Route>

        <Route element={<RoleRoute allowedRoles={["seller"]} />}>
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
        </Route>

        <Route element={<RoleRoute allowedRoles={["serviceProvider"]} />}>
          <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        </Route>

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/create" element={<CreateProfilePage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        <Route path="/profile/delete" element={<DeleteProfilePage />} />

      {/* </Route> */}

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}