import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
  useEffect(() => {
    document.title = "My Review | Chill Gamer ";
  }, []);
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
   fetch(`https://assaignmet-10-server.vercel.app/myReviews/${user?.email}`)
   .then(res => res.json())
   .then(data => {
     setReviews(data);

   })
  }, []);

  return (
    <div>
      <div className="container mx-auto overflow-hidden">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-250px)]">
        <h1 className="text-3xl mt-5 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
          {user.displayName},Your All review is here.
        </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th className="hidden sm:block">Photo</th>
                  <th>Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, index) => (
                  <ReviewCard
                  reviews={reviews}
                  setReviews={setReviews}
                    key={review._id}
                    idx={index}
                    review={review}
                  ></ReviewCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyReviews;
