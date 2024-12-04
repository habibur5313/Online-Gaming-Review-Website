import React, { useContext } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { AuthContext } from "../../Context/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnailUrl = form.thumbnailUrl.value;
    const name = form.name.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genres = form.genres.value;
    const email = user.email;
    const review = {
      thumbnailUrl,
      name,
      description,
      rating,
      year,
      genres,
      email,
    };
    console.log(review);

    fetch('http://localhost:5000/reviews',{
                    method: 'POST',
                    headers: {'content-type' : 'application/json'},
                    body: JSON.stringify(review)
    })
  };
  return (
    <div>
      <div className="container mx-auto border">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-250px)]">
          <form onSubmit={handleAddReview}>
            <div className="max-w-3xl mx-auto flex gap-4 mt-8">
              <input
                type="text"
                placeholder="Type here"
                name="thumbnailUrl"
                className="input input-bordered h-14 w-full"
              />
              <input
                type="text"
                placeholder="Type here"
                name="name"
                className="input input-bordered w-full h-14"
              />
            </div>

            <div className="max-w-3xl mx-auto mt-8">
              <textarea
                placeholder="Bio"
                name="description"
                className="textarea textarea-bordered h-14 w-full"
              ></textarea>
            </div>

            <div className="max-w-3xl mx-auto flex gap-4 mt-8">
              <input
                type="number"
                placeholder="Type here"
                name="rating"
                className="input input-bordered h-14 w-full"
              />
              <input
                type="number"
                placeholder="Type here"
                name="year"
                className="input input-bordered w-full h-14"
              />
            </div>

            <div className="max-w-3xl mx-auto flex gap-4 mt-8">
              <input
                type="text"
                placeholder="Type here"
                name="genres"
                className="input input-bordered h-14 w-full"
              />
              <input
                type="text"
                placeholder="Type here"
                value={user?.email}
                className="input input-bordered w-full h-14"
              />
            </div>
            <div className="max-w-3xl mx-auto mt-10">
              <input
                type="submit"
                className="w-full btn btn-accent text-white font-medium text-xl"
                value="Add Review"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddReview;
