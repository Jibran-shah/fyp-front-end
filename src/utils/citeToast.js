// utils/citeToast.js

import { toast } from "react-toastify";
//import CiteToast from "../components/toast/CiteToast";

// export const citeToastJsx = ({
//   title,
//   message,
//   type = "info",
// }) => {
//   toast(
//     ({ closeToast }) => (
//       <CiteToast
//         title={title}
//         message={message}
//         type={type}
//         closeToast={closeToast}
//       />
//     ),
//     {
//       closeButton: false,
//       hideProgressBar: false,
//       icon: false,
//       style: {
//         background: "transparent",
//         boxShadow: "none",
//         padding: 0,
//       },
//     }
//   );
// };

export const citeToast = ({ title, message, type = "info" }) => {
  const fullMessage = title ? `${title}: ${message}` : message;

  switch (type) {
    case "success":
      return toast.success(fullMessage);

    case "error":
      return toast.error(fullMessage);

    case "warning":
      return toast.warn(fullMessage);

    default:
      return toast.info(fullMessage);
  }
};