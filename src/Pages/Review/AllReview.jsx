import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import ReviewCard from "./ReviewCard";

const AllReview = () => {
  const loaderData = useLoaderData();
//   console.log(loaderData);

  return (
    <div>
      <div className="container mx-auto border">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-250px)]">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Rating</th>
                  <th>Year</th>
                  <th >Genres</th>
                </tr>
              </thead>
              <tbody>
               {loaderData.map((review,index) => <ReviewCard key={review._id} idx={index} review={review}></ReviewCard>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllReview;
