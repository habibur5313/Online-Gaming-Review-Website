import React from "react";
import { Link } from "react-router-dom";

const AllReviewCard = ({ review, idx }) => {
  return (
    <div className="card bg-base-100 h-[300px]  image-full shadow-xl">
      <figure>
        <img
         className="w-full " src={review.thumbnailUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-center">{review?.name}</h2>
        <div>
        <p className="text-center text-xl font-medium">Rating: {review?.rating}</p>
        <p className="text-center text-xl font-medium mt-2">genres: {review?.genres}</p>
        <Link className="flex justify-center items-center mt-4" to={`/reviews/details/${review._id}`}><button className="btn btn-accent text-white text-xl font-medium">View details</button></Link>
        </div>
        
      </div>
    </div>
  );
};

export default AllReviewCard;
