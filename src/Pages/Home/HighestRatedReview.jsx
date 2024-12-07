import React, { useEffect, useState } from "react";
import AllReviewCard from "../Review/AllReviewCard";

const HighestRatedReview = () => {
  const [highestRatedGames, setHighestRatedGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/highestRatedGames")
      .then((res) => res.json())
      .then((data) => {
        setHighestRatedGames(data);
      });
  }, []);
  return (
    <>
     <h1 className="text-3xl -mt-20 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
        Highest Rated Games
        </h1>
      <div className="min-h-[calc(100vh-250px)] mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-4">
        {highestRatedGames.map((review, index) => (
          <AllReviewCard
            key={review._id}
            idx={index}
            review={review}
          ></AllReviewCard>
        ))}
      </div>
    </>
  );
};

export default HighestRatedReview;
