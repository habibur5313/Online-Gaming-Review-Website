import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
  useEffect(() => {
    document.title = "Update Review | Chill Gamer ";
  }, []);
  const loaderData = useLoaderData();
  const {
    description,
    displayName,
    email,
    genres,
    name,
    rating,
    thumbnailUrl,
    year,
    _id,
  } = loaderData;

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnailUrl = form.thumbnailUrl.value;
    const name = form.name.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genres = form.genres.value;
    const review = {
      thumbnailUrl,
      name,
      description,
      rating,
      year,
      genres,
      email,
      displayName,
    };

    fetch(`https://assaignmet-10-server.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 2021; year <= currentYear; year++) {
    years.push(year);
  }

  const currentRank = 5;
  const ratings = [];
  for (let rank = 1; rank <= currentRank; rank++) {
    ratings.push(rank);
  }

  const stringOptions = ["Auction", "RPG", "Adventure"];
const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div
        className={
          darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
        }
      >
     <div className="container mx-auto overflow-hidden ">
        <div className="">
          <Navbar toggleDarkMode={toggleDarkMode}></Navbar>
        </div>
        <div className="min-h-[calc(100vh-250px)] mt-40">
          <form onSubmit={handleAddReview} className="text-black">
            <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12  mx-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
              <input
                type="text"
                value={displayName}
                className="input input-bordered h-14 w-full"
              />
              <input
                type="text"
                value={email}
                className="input input-bordered w-full h-14"
              />
            </div>
            <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
              <input
                type="text"
                defaultValue={thumbnailUrl}
                name="thumbnailUrl"
                className="input input-bordered h-14 w-full"
              />
              <input
                type="text"
                defaultValue={name}
                name="name"
                className="input input-bordered w-full h-14"
              />
            </div>

            <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto mt-4 md:mt-8">
              <textarea
                defaultValue={description}
                name="description"
                className="textarea textarea-bordered h-14 w-full"
              ></textarea>
            </div>

            <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
              <div className="w-full">
                <select
                  className="input input-bordered h-14 w-full "
                  name="rating"
                  defaultValue={rating}
                >
                  {ratings.map((rank) => (
                    <option key={rank} value={rank}>
                      {rank}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <select
                  className="input input-bordered h-14 w-full "
                  name="year"
                  defaultValue={year}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto md:flex gap-4 mt-4 md:mt-8">
              <div className="w-full">
                <select
                  className="input input-bordered h-14 w-full "
                  name="genres"
                  defaultValue={genres}
                >
                  {" "}
                  <option value="">Select an option</option>{" "}
                  {stringOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {" "}
                      {option}{" "}
                    </option>
                  ))}{" "}
                </select>
              </div>
            </div>
            <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto mt-10">
              <input
                type="submit"
                className="w-full btn btn-accent text-white font-medium text-xl"
                value="Update Review"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateReview;
