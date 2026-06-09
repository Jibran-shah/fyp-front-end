export const buildProductSellerFormData = (data) => {
  const formData = new FormData();

  if (data.shopName)
    formData.append("shopName", data.shopName);

  if (data.shopDescription)
    formData.append("shopDescription", data.shopDescription);

  if (data.locationLat !== undefined)
    formData.append("locationLat", data.locationLat);

  if (data.locationLn !== undefined)
    formData.append("locationLn", data.locationLn);

  if (data.shopLogoFile)
    formData.append("shopLogoFile", data.shopLogoFile);

  if (data.shopLogoId)
    formData.append("shopLogoId", data.shopLogoId);

  return formData;
};