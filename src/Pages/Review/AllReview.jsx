import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import AllReviewCard from "./AllReviewCard";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";

const AllReview = () => {
  useEffect(() => {
    document.title = "All Review | Chill Gamer ";
  }, []);
  const loaderData = useLoaderData();
  const [reviews, setReviews] = useState(loaderData);
  const handleSort = (sort) => {
    fetch(`https://assaignmet-10-server.vercel.app/allReviews/${sort}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  };

  const handleFilter = (filter) => {
    fetch(`https://assaignmet-10-server.vercel.app/review/filter/${filter}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  };

  const handleAll = () => {
    setReviews(loaderData)
  }

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
    <div
        className={
          darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
        }
      >
     <div className="container mx-auto overflow-hidden ">
        <div className="">
          <Navbar toggleDarkMode={toggleDarkMode}></Navbar>
        </div>
        <div className="min-h-[calc(100vh-250px)] mt-40">
         <Fade>
         <h1 className="text-3xl mt-5 font-semibold uppercase  text-purple-700 text-center">
            All Review is here
          </h1>
         </Fade>
          <div className="flex flex-col sm:flex-row justify-end items-center">
          <div className="flex justify-end">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 mr-10 md:mr-20 text-2xl font-semibold"
              >
                Sort
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-5 menu bg-base-100 rounded-box z-[100] w-52 p-2 shadow text-black"
              >
                <li>
                  <button
                    onClick={() => handleSort("rating")}
                    className="text-xl font-medium"
                  >
                    Sort By Rating
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSort("year")}
                    className="text-xl font-medium"
                  >
                    Sort By Year
                  </button>
                </li>
              </ul>
            </div>
          </div>
         
          <div className="flex justify-end">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 mr-10 md:mr-20 text-2xl font-semibold"
              >
                Filter
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-5 menu bg-base-100 rounded-box z-[100] w-52 p-2 shadow text-black"
              >
                <li>
                  <button
                    onClick={() => handleFilter("Auction")}
                    className="text-xl font-medium"
                  >
                    Auction
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilter("RPG")}
                    className="text-xl font-medium"
                  >
                    RPG
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilter("Adventure")}
                    className="text-xl font-medium"
                  >
                    Adventure
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end">
          <button onClick={handleAll}  className="btn m-1 mr-10 md:mr-20 text-2xl font-semibold">All</button>
</div>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {reviews.map((review) => (
              <AllReviewCard key={review._id} review={review}></AllReviewCard>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllReview;
