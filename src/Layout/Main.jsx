import React from "react";
import Navbar from "../Pages/Shared_pages/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared_pages/Navbar/Footer/Footer";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
