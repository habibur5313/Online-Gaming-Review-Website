import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { AuthContext } from "../../Context/AuthProvider";

const GameWatchList = () => {
  useEffect(() => {
    document.title = "WatchList | Chill Gamer ";
  }, []);
  const [watchLists, setWatchLists] = useState([]);
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    fetch(`https://assaignmet-10-server.vercel.app/watchLists/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWatchLists(data);
      });
  }, []);
  
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
          {user?.displayName},Your WatchLists Is Here
        </h1>
        <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th className="hidden sm:block">Photo</th>
                  <th>Name</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {watchLists.map((watchList, index) => (
                  <tr className="">
                  <th>{index + 1}</th>
                  <td className="hidden sm:block"><img className="w-20 rounded-xl"  src={watchList?.thumbnailUrl} alt="" /></td>
                  <td>{watchList?.name}</td>
                  <td>{watchList?.rating}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GameWatchList;
