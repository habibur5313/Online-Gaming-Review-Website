import React, { useContext, useEffect, useState } from "react";
import AllReviewCard from "./AllReviewCard";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewCard from "./ReviewCard";

const GameWatchList = () => {
  const [watchLists, setWatchLists] = useState([]);
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    fetch(`https://assaignmet-10-server.vercel.app/watchLists/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWatchLists(data);
      });
  }, []);

  // useEffect(() => {
  //   const uniqueItems = [];
  //   const map = new Map();
  //   for (const item of items) {
  //     if (!map.has(item.id)) {
  //       map.set(item.id, true);
  //       uniqueItems.push(item);
  //     }
  //   }
  //   setWatchLists(uniqueItems);
  // }, [items]);

  

  return (
    <div >
      <div className="container mx-auto overflow-hidden">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-250px)]">
        <h1 className="text-3xl mt-5 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
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
