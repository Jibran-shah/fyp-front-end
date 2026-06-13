import AppRoutes from "../routes/AppRoutes";
import { useSelector } from "react-redux";
import AppLoader from "../components/common/AppLoader";
import {useAuthInit} from "../hooks/api/auth/useAuthInit"

export default function App() {
  useAuthInit()
  const authLoading = useSelector((state) => state.ui.authLoading);
  if (authLoading) {
    return <AppLoader />;
  }
  return (<>
  <AppRoutes />
  </>);
}