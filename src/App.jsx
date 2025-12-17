import React from "react";
import "./App.css";
import Navbar from "./Pages/Shared_pages/Navbar/Navbar";
import Home from "./Pages/Homepage/Home/Home";
import Footer from "./Pages/Shared_pages/Navbar/Footer/Footer";
import All_Apps from "./Pages/All_Apps_Page/All_Apps";
import App_Details from "./Pages/All_Apps_Page/App_Details";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <All_Apps/> */}
      {/* <App_Details/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default App;
