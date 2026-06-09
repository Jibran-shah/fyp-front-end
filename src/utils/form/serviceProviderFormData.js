export const buildServiceProviderFormData = (data) => {
  const formData = new FormData();

  if (data.title) formData.append("title", data.title);
  if (data.description) formData.append("description", data.description);
  if (data.experienceYears !== undefined)
    formData.append("experienceYears", data.experienceYears);

  if (data.fullAddress)
    formData.append("fullAddress", data.fullAddress);

  if (data.locationLat)
    formData.append("locationLat", data.locationLat);

  if (data.locationLn)
    formData.append("locationLn", data.locationLn);

  if (Array.isArray(data.skills)) {
    data.skills.forEach((s) =>
      formData.append("skills[]", s)
    );
  }

  return formData;
};