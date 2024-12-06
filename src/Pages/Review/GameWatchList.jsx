import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllReviewCard from "./AllReviewCard";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const GameWatchList = () => {
                    const [watchLists,setWatchLists] = useState([])
useEffect(() => {
                    fetch('https://assaignmet-10-server.vercel.app/watchLists')
                    .then(res => res.json())
                    .then(data => {
                                        setWatchLists(data);
                                        
                    })
},[])

// const remain = watchLists.filter(a => a.id === )
// console.log(remain);

  return (
    <div>
      <div className="container mx-auto border">
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-250px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-4">
          {watchLists.map((review, index) => (
            <AllReviewCard
              key={review._id}
              review={review}
            ></AllReviewCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GameWatchList;
