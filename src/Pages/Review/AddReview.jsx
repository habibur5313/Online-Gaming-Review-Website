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
    const email = user?.email;
    const displayName = user?.displayName
    const review = {
      thumbnailUrl,
      name,
      description,
      rating,
      year,
      genres,
      email,
      displayName
    };
    // console.log(review);

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
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12  mx-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
              <input
                type="text"
               value={user?.displayName}
                className="input input-bordered h-14 w-full"
              />
              <input
                type="text"
                value={user?.email}
                className="input input-bordered w-full h-14"
              />
            </div>
            <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
              <input
                type="text"
                placeholder="Type Thumbnail URL"
                name="thumbnailUrl"
                className="input input-bordered h-14 w-full"
              />
              <input
                type="text"
                placeholder="Type Review title"
                name="name"
                className="input input-bordered w-full h-14"
              />
            </div>

            <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto mt-4 md:mt-8">
              <textarea
                placeholder="type review description"
                name="description"
                className="textarea textarea-bordered h-14 w-full"
              ></textarea>
            </div>

            <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
              <input
                type="number"
                placeholder="Type rating"
                name="rating"
                className="input input-bordered h-14 w-full"
              />
              <input
                type="number"
                placeholder="Type Year"
                name="year"
                className="input input-bordered w-full h-14"
              />
            </div>

            <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto md:flex gap-4 mt-4 md:mt-8">
              <input
                type="text"
                placeholder="Type genres"
                name="genres"
                className="input input-bordered h-14 w-full"
              />
            </div>
            <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto mt-10">
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
