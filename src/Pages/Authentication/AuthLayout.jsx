import React from "react";
import Navbar from "../Home/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";

const AuthLayout = () => {
  return (
    <div>
      <div className="container mx-auto border">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-250px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
