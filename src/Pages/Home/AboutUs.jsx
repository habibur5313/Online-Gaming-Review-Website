import React from "react";
import {
  FaDiscord,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
                    <>
                    <h1 className="text-3xl uppercase mt-10 font-semibold animate__animated animate__pulse animate__infinite infinite text-purple-700 text-center">about us
        </h1>
    <div className=" bg-purple-700 rounded-xl text-white  mt-10 flex flex-col xl:flex-row  ">
                    
      <div className=" flex-1 flex flex-col items-center justify-center px-2 py-4 xl:py-20 lg:px-10 space-y-3">
        <h1 className="text-4xl font-bold text-center">THE CHILL GAMER</h1>
        <p className="text-xl font-medium text-center">
        Welcome to Chill Gamer! We're a passionate community of gamers who live and breathe online gaming. Our platform is dedicated to providing you with in-depth reviews, insightful articles, and the latest updates on the most exciting games out there. Whether you're a casual player or a hardcore enthusiast, our goal is to help you discover new games, share your experiences, and connect with like-minded gamers. We believe in the power of gaming to bring people together and create unforgettable experiences. Join us on this thrilling journey and let's make every gaming moment count!
        </p>
        <div className="text-2xl  font-medium flex gap-2">
          <Link to={'https://www.linkedin.com/in/md-habibur-rahman-4bbbbb340/'}>
            <button>
              <FaLinkedin />
            </button>
          </Link>
          <Link to={'https://www.facebook.com/habibur5231'}><button>
            <FaFacebookSquare />
          </button></Link>
         <Link to={'https://github.com/habibur5313'}> <button>
            <FaGithubSquare />
          </button></Link>
          <Link to={'https://discord.com/habibur5231'}><button>
            <FaDiscord />
          </button></Link>
        </div>
      </div>
      <div className=" flex-1 flex items-center justify-center px-2 py-4 xl:py-20 lg:px-10 ">
       <div className="">
        <img className=" rounded-xl w-full h-[250px] sm:h-[300px]" src="https://i.ibb.co.com/k0J1RrM/images.png" alt="" />
       </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
