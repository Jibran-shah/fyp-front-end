export const toFormData = (values = {}, fileFields = {}) => {
  const formData = new FormData();

  // 1. normal fields
  Object.entries(values).forEach(([key, value]) => {
    if (fileFields[key]) return;

    if (value === null || value === undefined) return;

    if (Array.isArray(value)) {
      value.forEach((v) => formData.append(key, v));
    } else if (typeof value === "object" && !(value instanceof File)) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });

  // 2. file fields (IMPORTANT FIX HERE)
  Object.entries(fileFields).forEach(([key, value]) => {
    if (!value) return;

    if (Array.isArray(value)) {
      value.forEach((file) => formData.append(key, file));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};