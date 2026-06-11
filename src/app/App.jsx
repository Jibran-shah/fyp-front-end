import AppRoutes from "../routes/AppRoutes";
import { useAuthInit } from "../hooks/api/auth/useAuthInit";
import { useSelector } from "react-redux";
import AppLoader from "../components/common/AppLoader";
import Navbar from "../components/common/layout/Navbar/Navbar";
import Footer from "../components/common/Footer";

export default function App() {
  // bootstraps authentication session once on app mount
  useAuthInit();

  const authLoading = useSelector((state) => state.ui.authLoading);

  if (authLoading) {
    return <AppLoader />;
  }

  return (<>
  <Navbar/>
  <AppRoutes />
  <Footer />
  </>);
}