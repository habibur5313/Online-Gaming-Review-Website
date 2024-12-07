import React, { useContext, useEffect, useState } from "react";
import AllReviewCard from "./AllReviewCard";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { AuthContext } from "../../Context/AuthProvider";

const GameWatchList = () => {
  const [items, setItems] = useState([]);
  const [watchLists, setWatchLists] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://assaignmet-10-server.vercel.app/watchLists")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  useEffect(() => {
    const uniqueItems = [];
    const map = new Map();
    for (const item of items) {
      if (!map.has(item.id)) {
        map.set(item.id, true);
        uniqueItems.push(item);
      }
    }
    setWatchLists(uniqueItems);
  }, [items]);

  

  return (
    <div>
      <div className="container mx-auto border">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
        <h1 className="text-3xl mt-5 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
          {user?.displayName},Your WatchLists Is Here
        </h1>
        <div className="min-h-[calc(100vh-250px)] mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-4">
          {watchLists.map((review, index) => (
            <AllReviewCard key={review._id} review={review}></AllReviewCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GameWatchList;
