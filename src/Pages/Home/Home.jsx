import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <div className="container mx-auto border">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
        <Banner></Banner>
        <div className="min-h-[calc(100vh-250px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
