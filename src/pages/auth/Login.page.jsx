import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/page/auth/AuthLayout";
import InputField from "../../components/common/InputField";

import { useLogin } from "../../hooks/api/auth/useLogin";
import { useLoginForm } from "../../hooks/form/auth/useLoginForm";

import { Button } from "@mui/material";

import { useAuthRedirectIfLoggedIn } from "../../hooks/api/auth/useAuthRedirectIfLoggedIn";

export default function LoginPage() {
  const navigate = useNavigate();

  const loginMutation = useLogin();
  const form = useLoginForm();
  
  useAuthRedirectIfLoggedIn("/buyer/dashboard"); 

  const onSubmit = (data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        navigate("/buyer/dashboard");
      }
    });
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue your journey"
      onSubmit={form.handleSubmit(onSubmit)}
      isLoading={loginMutation.isPending}
      mode="login"
    >
      <InputField
        label="Email"
        name="email"
        register={form.register}
        error={form.formState.errors.email}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        register={form.register}
        error={form.formState.errors.password}
      />

      <Button
        onClick={() => navigate("/forgot-password")}
        sx={{ textTransform: "none", fontSize: 12, alignSelf: "flex-end" }}
      >
        Forgot Password?
      </Button>

    </AuthLayout>
  );
}