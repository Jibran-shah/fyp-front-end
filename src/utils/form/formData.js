export const toFormData = (data = {}, fileMap = {}) => {
  const formData = new FormData();

  // 1. append normal fields
  Object.entries(data).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    // arrays
    if (Array.isArray(value)) {
      value.forEach((v) => formData.append(key, v));
      return;
    }

    formData.append(key, value);
  });

  // 2. append files (multer fields)
  Object.entries(fileMap).forEach(([fieldName, file]) => {
    if (!file) return;

    // single file
    if (file instanceof File) {
      formData.append(fieldName, file);
      return;
    }

    // array of files
    if (Array.isArray(file)) {
      file.forEach((f) => formData.append(fieldName, f));
    }
  });

  return formData;
};