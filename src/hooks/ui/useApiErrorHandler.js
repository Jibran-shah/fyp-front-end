import { parseApiError } from "../../utils/apiError";

export const useApiErrorHandler = () => {
  return (error, notify) => {
    const message = parseApiError(error);

    if (notify) {
      notify(message);
    }

    return message;
  };
};