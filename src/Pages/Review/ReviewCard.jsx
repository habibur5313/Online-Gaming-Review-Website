import React from "react";
import { GrUpdate } from "react-icons/gr";
import { TiDelete, TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewCard = ({ review, idx,setReviews,reviews }) => {
  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you Sure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://assaignmet-10-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "", "success");
              const remaining = reviews.filter(rev => rev._id !== id)
              setReviews(remaining)
            }
          });
      } else if (result.isDenied) {
        Swal.fire("review not deleted", "", "info");
      }
    });
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td className="hidden sm:block">
        <img className="w-20 rounded-xl" src={review.thumbnailUrl} alt="" />
      </td>
      <td>{review.name}</td>
      <td className="flex items-center justify-center gap-4">
        <button
          onClick={() => handleDelete(review._id)}
          className="btn btn-accent text-3xl text-red-700"
        >
          <TiDelete />
        </button>
        <Link to={`/reviews/update/${review._id}`}><button className="btn btn-accent text-xl text-red-700 ">
          <GrUpdate />
        </button></Link>
        <Link className="sm:flex justify-center items-center hidden  " to={`/reviews/details/${review._id}`}><button className="btn btn-accent text-white text-xl font-medium">explore details</button></Link>
      </td>
    </tr>
  );
};

export default ReviewCard;
