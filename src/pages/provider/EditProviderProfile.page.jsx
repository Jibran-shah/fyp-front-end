import { TextField, Stack, Box, Chip, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import ProviderProfileForm from "../../components/page/provider/ProviderProfileForm";

import { useServiceProviderForm } from "../../hooks/form/serviceProvider/useServiceProvider.form";
import { useUpdateServiceProviderByUser } from "../../hooks/api/serviceProvider/serviceProvider.hooks";
import { useGeoLocation } from "../../hooks/ui/useGeoLocation";
import { buildServiceProviderPayload } from "../../utils/form/serviceProviderFormData";

export default function EditProviderProfilePage({ existingProvider }) {
  const form = useServiceProviderForm();
  const mutation = useUpdateServiceProviderByUser();

  const [skillInput, setSkillInput] = useState("");

  const skills = form.watch("skills") || [];

  /* =========================================================
     LOAD EXISTING DATA INTO FORM
  ========================================================= */
  useEffect(() => {
    if (!existingProvider) return;

    form.reset({
      title: existingProvider.title || "",
      description: existingProvider.description || "",
      skills: existingProvider.skills || [],
      experienceYears: existingProvider.experienceYears || "",
      locationLat: existingProvider.location?.coordinates?.[1],
      locationLn: existingProvider.location?.coordinates?.[0],
      fullAddress: existingProvider.fullAddress || ""
    });
  }, [existingProvider]);

  /* =========================================================
     GEO LOCATION (MANUAL ONLY)
  ========================================================= */
  const { status: locationStatus, error: locationError } =
    useGeoLocation(form.setValue);

  /* =========================================================
     SKILLS HANDLING
  ========================================================= */
  const addSkill = () => {
    const value = skillInput.trim();
    if (!value) return;

    if (skills.includes(value)) return;

    form.setValue("skills", [...skills, value], {
      shouldDirty: true
    });

    setSkillInput("");
  };

  const removeSkill = (index) => {
    form.setValue(
      "skills",
      skills.filter((_, i) => i !== index),
      { shouldDirty: true }
    );
  };

  /* =========================================================
     SUBMIT (UPDATE)
  ========================================================= */
  const onSubmit = (data) => {
    if (mutation.isPending) return;

    mutation.mutate(buildServiceProviderPayload(data));
  };

  return (
    <ProviderProfileForm
      title="Edit Service Provider Profile"
      subtitle="Update your professional information"
      onSubmit={form.handleSubmit(onSubmit)}
      isLoading={mutation.isPending}
      submitText="Update Profile"
    >
      <Stack spacing={2.5}>

        {/* LOCATION STATUS */}
        {locationStatus === "requesting" && (
          <Typography variant="body2" color="text.secondary">
            Detecting your location...
          </Typography>
        )}

        {locationStatus === "granted" && (
          <Typography variant="body2" color="success.main">
            Location updated
          </Typography>
        )}

        {locationError && (
          <Typography variant="body2" color="error">
            {locationError}
          </Typography>
        )}

        {/* TITLE */}
        <TextField
          label="Professional Title"
          fullWidth
          {...form.register("title")}
        />

        {/* DESCRIPTION */}
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          {...form.register("description")}
        />

        {/* SKILLS (CHIPS - SAME AS CREATE) */}
        <Box>
          <Stack direction="row" spacing={1}>
            <TextField
              size="small"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Add skill"
            />

            <Button variant="outlined" onClick={addSkill}>
              Add
            </Button>
          </Stack>

          <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
            {skills.map((skill, i) => (
              <Chip
                key={`${skill}-${i}`}
                label={skill}
                onDelete={() => removeSkill(i)}
              />
            ))}
          </Stack>
        </Box>

        {/* EXPERIENCE */}
        <TextField
          label="Experience (Years)"
          type="number"
          fullWidth
          {...form.register("experienceYears")}
        />

        {/* ADDRESS */}
        <TextField
          label="Full Address"
          fullWidth
          {...form.register("fullAddress")}
        />

        {/* LOCATION BUTTON */}
        <Button
          variant="outlined"
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                form.setValue("locationLat", pos.coords.latitude, {
                  shouldDirty: true
                });

                form.setValue("locationLn", pos.coords.longitude, {
                  shouldDirty: true
                });
              },
              () => {
                alert("Location permission denied");
              }
            );
          }}
        >
          Update Location
        </Button>

      </Stack>
    </ProviderProfileForm>
  );
}