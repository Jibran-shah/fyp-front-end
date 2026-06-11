import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/page/auth/AuthLayout";
import InputField from "../../components/common/InputField";

import { useRegister } from "../../hooks/api/auth/useRegister";
import { useRegisterForm } from "../../hooks/form/auth/useRegisterForm";
import { useAuthRedirectIfLoggedIn } from "../../hooks/api/auth/useAuthRedirectIfLoggedIn";

export default function RegisterPage() {
  const navigate = useNavigate();

  const registerMutation = useRegister();
  const form = useRegisterForm();

  useAuthRedirectIfLoggedIn("/buyer/dashboard");

  const onSubmit = (data) => {
    registerMutation.mutate(data, {

      onSuccess: () => navigate("/profile/create"),
    });
  };

  return (
    <AuthLayout
      title="Create account"
      subtitle="Join the marketplace and start buying and selling"
      onSubmit={form.handleSubmit(onSubmit)}
      isLoading={registerMutation.isPending}
      mode="register"
    >
      <Stack spacing={2}>
        <InputField
          label="Username"
          name="userName"
          register={form.register}
          error={form.formState.errors.userName}
        />

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
      </Stack>
    </AuthLayout>
  );
}