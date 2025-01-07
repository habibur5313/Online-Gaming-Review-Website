import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";

const ReviewsCardDetails = () => {
  useEffect(() => {
    document.title = "Review Details | Chill Gamer ";
  }, []);
  const loaderData = useLoaderData();
  const {user} = useContext(AuthContext)
 const userEmail = user?.email;
 
  
  const {
    thumbnailUrl,
    name,
    email,
    displayName,
    rating,
    year,
    genres,
    description,
    _id,
  } = loaderData;
  const [isDisabled, setIsDisabled] = useState(false);
  const handleAddToWatchList = (id) => {
    const WatchList = {
      thumbnailUrl,
      name,
      email,
      displayName,
      rating,
      year,
      genres,
      description,
      id: _id,
      userEmail
    };
    fetch("https://assaignmet-10-server.vercel.app/watchLists", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(WatchList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setIsDisabled(true);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Add To WatchList successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
          <div className="card bg-base-100 max-w-2xl mx-auto shadow-xl">
            <figure>
              <img
                className="w-full h-[400px]"
                src={thumbnailUrl}
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-black">
              <h2 className="text-3xl font-semibold">{name}</h2>
              <p className="text-xl font-medium">email: {email}</p>
              <p className="text-xl font-medium">name: {displayName}</p>
              <p className="text-xl font-medium">rating: {rating}</p>
              <p className="text-xl font-medium">year: {year}</p>
              <p className="text-xl font-medium">genres: {genres}</p>
              <p className="text-xl font-medium">description: {description}</p>
              <button
                disabled={isDisabled ? true : false}
                onClick={() => handleAddToWatchList(_id)}
                className="btn btn-accent text-white text-xl font-semibold"
              >
                Add To WatchList
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ReviewsCardDetails;
