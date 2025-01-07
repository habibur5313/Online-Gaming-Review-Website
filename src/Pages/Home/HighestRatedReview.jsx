import React, { useEffect, useState } from "react";
import AllReviewCard from "../Review/AllReviewCard";

const HighestRatedReview = () => {
  const [highestRatedGames, setHighestRatedGames] = useState([]);

  useEffect(() => {
    fetch("https://assaignmet-10-server.vercel.app/highestRatedGames")
      .then((res) => res.json())
      .then((data) => {
        setHighestRatedGames(data);
      });
  }, []);
  return (
    <>
     <h1 className="text-3xl md:-mt-20 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center uppercase">
        Highest Rated Games
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 ">
        {highestRatedGames.map((review) => (
          <AllReviewCard
            key={review._id}
            review={review}
          ></AllReviewCard>
        ))}
      </div>
    </>
  );
};

export default HighestRatedReview;
