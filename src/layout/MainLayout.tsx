import Footer from "@/component/Shared/Footer";
import Navbar from "../component/Shared/navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
