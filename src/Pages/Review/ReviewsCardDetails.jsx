import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const ReviewsCardDetails = () => {
  const loaderData = useLoaderData();
  //   console.log(loaderData);

  return (
    <div>
      <div className="container mx-auto border">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-250px)]">
          <div className="card bg-base-100 max-w-2xl mx-auto shadow-xl">
            <figure>
              <img
                className="w-full h-[400px]" src={loaderData?.thumbnailUrl}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-3xl font-semibold">{loaderData?.name}</h2>
              <p className="text-xl font-medium">email: {loaderData?.email}</p>
              <p className="text-xl font-medium">rating: {loaderData?.rating}</p>
              <p className="text-xl font-medium">year: {loaderData?.year}</p>
              <p className="text-xl font-medium">genres: {loaderData?.genres}</p>
              <p className="text-xl font-medium">description: {loaderData?.description}</p>
             
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ReviewsCardDetails;
