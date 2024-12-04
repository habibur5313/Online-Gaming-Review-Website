import React from "react";

const ReviewCard = ({review,idx}) => {
                    console.log(review);
                    
  return (
    <tr>
      <th>{idx + 1}</th>
      <td><img className="w-20 rounded-xl" src={review.thumbnailUrl} alt="" /></td>
      <td>{review.name}</td>
      <td >{review.description}</td>
      <td>{review.rating}</td>
      <td>{review.year}</td>
      <td>{review.genres}</td>
    </tr>
  );
};

export default ReviewCard;
