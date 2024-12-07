import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import AllReviewCard from "./AllReviewCard";

const AllReview = () => {
  const loaderData = useLoaderData();
  const [reviews,setReviews] = useState(loaderData)
const handleSortByRating = () => {
 fetch('https://assaignmet-10-server.vercel.app/AllReviews/sort')
 .then(res => res.json())
 .then(data => setReviews(data))
  
}
const handleSortByYear = () => {
 fetch('https://assaignmet-10-server.vercel.app/AllReviews/year')
 .then(res => res.json())
 .then(data => setReviews(data))
  
}


  return (
    <div >
      <div className="container mx-auto">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
       <div className="min-h-[calc(100vh-250px)]">
       <h1 className="text-3xl mt-5 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
          All Review is here
        </h1>
        <div className="flex justify-end">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn m-1 mr-10 md:mr-20 text-2xl font-semibold">
            Sort
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content mt-5 menu bg-base-100 rounded-box z-[100] w-52 p-2 shadow"
          >
            <li>
              <button onClick={handleSortByRating} className="text-xl font-medium">Sort By Rating</button>
            </li>
            <li>
             <button onClick={handleSortByYear} className="text-xl font-medium">Sort By Year</button>
            </li>
          </ul>
        </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <AllReviewCard
              key={review._id}
              review={review}
            ></AllReviewCard>
          ))}
        </div>
       </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllReview;
