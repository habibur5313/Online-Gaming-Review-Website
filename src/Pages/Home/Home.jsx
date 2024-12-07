import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import HighestRatedReview from "./HighestRatedReview";
import ReviewVideo from "./ReviewVideo";

const Home = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
       <div className="min-h-[calc(100vh-250px)]">
       <Banner></Banner>
        <HighestRatedReview></HighestRatedReview>
        <ReviewVideo></ReviewVideo>

          <Outlet></Outlet>
       </div>

      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
