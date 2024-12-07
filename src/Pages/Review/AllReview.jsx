import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import ReviewCard from "./ReviewCard";
import AllReviewCard from "./AllReviewCard";

const AllReview = () => {
  const loaderData = useLoaderData();
  //   console.log(loaderData);

  return (
    <div>
      <div className="container mx-auto border">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
        <h1 className="text-3xl mt-5 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
         All Review is here
        </h1>
        <div className="min-h-[calc(100vh-250px)] mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-4">
          {loaderData.map((review, index) => (
            <AllReviewCard
              key={review._id}
              idx={index}
              review={review}
            ></AllReviewCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllReview;
