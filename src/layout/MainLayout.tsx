/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "@/component/Shared/Footer";
import Navbar from "../component/Shared/navbar";
import { Outlet } from "react-router-dom";

const MainLayout = ({ setTheme }:any) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar setTheme={setTheme}></Navbar>

      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
