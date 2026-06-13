// Layout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/layout/navbar/Navbar";
import Footer from "../components/common/Footer";

export default function Layout() {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}