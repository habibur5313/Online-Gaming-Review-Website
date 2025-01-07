import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  useEffect(() => {
    document.title = "Add Review | Chill Gamer ";
  }, []);
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
    const displayName = user?.displayName;
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

    fetch("https://assaignmet-10-server.vercel.app/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Review Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const years = [];
  for (let year = 2021; year <= currentYear; year++) {
    years.push(year);
  }

  const handleYearChange = (event) => {
    event.preventDefault();
    setSelectedYear(event.target.value);
  };

  const currentRank = 5;
  const [selectedRank, setSelectedRank] = useState(currentRank);
  const ratings = [];
  for (let rank = 1; rank <= currentRank; rank++) {
    ratings.push(rank);
  }

  const handleRatingChange = (e) => {
    e.preventDefault();
    setSelectedRank(e.target.value);
  };

  const [selectedValue, setSelectedValue] = useState("");
  const stringOptions = ["Auction", "RPG", "Adventure"];
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
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
        <h1 className="text-3xl uppercase mt-5 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
         {user.displayName},please add your review.
        </h1>
          <form onSubmit={handleAddReview} className="text-black">
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
              <div className="w-full">
                <select
                  className="input input-bordered h-14 w-full "
                  name="rating"
                  value={selectedRank}
                  onChange={handleRatingChange}
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
                  value={selectedYear}
                  onChange={handleYearChange}
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
                  value={selectedValue}
                  onChange={handleSelectChange}
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
