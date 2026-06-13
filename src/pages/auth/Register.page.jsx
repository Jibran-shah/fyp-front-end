import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import AuthLayout from "../../components/page/auth/AuthLayout";
import { InputField } from "../../components/common/InputField";

import { useRegister } from "../../hooks/api/auth/useRegister";
import { useRegisterForm } from "../../hooks/form/auth/useRegisterForm";
import { setUser } from "../../store/slices/auth.slice";

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerMutation = useRegister();
  const form = useRegisterForm();

  const onSubmit = (data) => {
    registerMutation.mutate(data, {
      onSuccess: (res) => {
        console.log("REGISTER RESPONSE:", res);
        const user = res?.data?.user ?? res?.user;
        if (user) {
          dispatch(setUser(user));
        }
        navigate("/emailVerificationGate");
      },
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