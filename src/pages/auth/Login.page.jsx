import { Stack, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/page/auth/AuthLayout";
import { InputField } from "../../components/common/InputField";

import { useLogin } from "../../hooks/api/auth/useLogin";
import { useLoginForm } from "../../hooks/form/auth/useLoginForm";
import { useAuthRedirectIfLoggedIn } from "../../hooks/api/auth/useAuthRedirectIfLoggedIn";

import { useDispatch } from "react-redux";
import { login } from "../../store/slices/auth.slice";
import { connectSocket } from "../../socket/socket.manager";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginMutation = useLogin();
  const form = useLoginForm();

  useAuthRedirectIfLoggedIn();

  const onSubmit = (data) => {

    form.clearErrors("root");

    loginMutation.mutate(data, {
      onSuccess: (res) => {
        console.log("login res",res)
        const user = res?.data?.user;
        dispatch(login(user));
        connectSocket();
        if (!user?.isEmailVerified) {
          navigate("/emailNotVerifiedGate");
        } else if (!user?.baseProfile) {
          navigate("/profile/create");
        } else {
          navigate("/home");
        }
      },

      onError: (error) => {
        const message =
          error?.response?.data?.message ||
          "Either email or password is incorrect";

        form.setError("root", {
          type: "manual",
          message,
        });
      },
    });
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue your marketplace journey"
      onSubmit={form.handleSubmit(onSubmit)}
      isLoading={loginMutation.isPending}
      mode="login"
    >
      <Stack spacing={2}>
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

        {/* GLOBAL LOGIN ERROR */}
        {form.formState.errors.root && (
          <Typography
            sx={{
              color: "error.main",
              fontSize: 13,
              mt: 0.5,
            }}
          >
            {form.formState.errors.root.message}
          </Typography>
        )}

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => navigate("/forgot-password")}
            sx={{
              textTransform: "none",
              fontSize: 13,
              color: "text.secondary",
              p: 0,
            }}
          >
            Forgot password?
          </Button>
        </Box>
      </Stack>
    </AuthLayout>
  );
}