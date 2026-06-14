import {
  Box,
  Paper,
  Typography,
  Button,
  Stack
} from "@mui/material";

import { InputField } from "../../components/common/InputField";
import { useCreateService } from "../../hooks/api/services/services.hooks";
import { useServiceForm } from "../../hooks/form/services/useService.form";
import CategoryTreeSelect from "../../components/page/categories/CategoryTreeSelect";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateServicePage() {
  console.log("Create Service page mounted");

  const navigate = useNavigate()

  const { mutate: createService, isPending } =
    useCreateService();

  const {
    register,
    handleSubmit,
    reset,
    control
  } = useServiceForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    createService(
      {
        ...data,
        price: Number(data.price),
        durationHours: Number(data.durationHours)
      },
      {
        onSuccess: () => {
          reset();
        }
      }
    );
  };

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 700
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          mb={3}
        >
          Create Service
        </Typography>

        <Stack spacing={2}>
          <InputField
            label="Service Name"
            name="name"
            register={register}
          />

          <InputField
            label="Description"
            name="description"
            register={register}
          />

          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <CategoryTreeSelect
                value={field.value}
                onChange={field.onChange}
                label="Category"
              />
            )}
          />

          <InputField
            label="Price"
            name="price"
            type="number"
            register={register}
          />

          <InputField
            label="Duration Hours"
            name="durationHours"
            type="number"
            register={register}
          />

          <InputField
            label="Address"
            name="fullAddress"
            register={register}
          />

          <Button
            variant="contained"
            type="submit"
            disabled={isPending}
          >
            {isPending
              ? "Creating..."
              : "Create Service"}
          </Button>
          <Button onClick={()=>{navigate("/profile")}}>Go to profile</Button>
        </Stack>
      </Paper>
    </Box>
  );
}