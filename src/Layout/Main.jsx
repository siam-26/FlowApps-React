import React from "react";
import Navbar from "../Pages/Shared_pages/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared_pages/Navbar/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
