import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import HighestRatedReview from "./HighestRatedReview";
import ReviewVideo from "./ReviewVideo";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Chill Gamer ";
  }, []);
  return (
    <>
      <div className="container mx-auto overflow-hidden ">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
       <div className="min-h-[calc(100vh-250px)]">
       <Banner></Banner>
        <HighestRatedReview></HighestRatedReview>
        <ReviewVideo></ReviewVideo>
        <Contact></Contact>

          <Outlet></Outlet>
       </div>

      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
