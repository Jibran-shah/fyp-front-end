export const buildBuyerProfileFormData = (data) => {
  const formData = new FormData();

  formData.append("fullName", data.fullName);

  if (data.phone) formData.append("phone", data.phone);
  if (data.bio) formData.append("bio", data.bio);
  if (data.country) formData.append("country", data.country);
  if (data.city) formData.append("city", data.city);
  if (data.address) formData.append("address", data.address);

  if (data.profileAvatar) {
    formData.append("profileAvatar", data.profileAvatar);
  }

  if (data.profileCover) {
    formData.append("profileCover", data.profileCover);
  }

  return formData;
};