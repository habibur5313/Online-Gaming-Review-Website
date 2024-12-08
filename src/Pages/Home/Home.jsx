import React, { useEffect, useState } from "react";
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


  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
     <div
        className={
          darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
        }
      >
     <div className="container mx-auto overflow-hidden ">
        <div className="w-11/12 mx-auto">
          <Navbar toggleDarkMode={toggleDarkMode}></Navbar>
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
      </div>
    </>
  );
};

export default Home;
