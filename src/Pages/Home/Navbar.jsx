import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = ({ toggleDarkMode }) => {
  const { user, handleSignOut } = useContext(AuthContext);
  const { pathname } = useLocation();

  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/allReviews"}>All Reviews</NavLink>
      {user && <NavLink to={"/addReview"}>Add Review</NavLink>}
      {user && <NavLink to={"/myReview"}>My Reviews</NavLink>}
      {user && <NavLink to={"/WatchList"}>WatchList</NavLink>}
    </>
  );

  return (
    <div className=" navbar px-2 md:px-6 xl:px-10  flex items-center border fixed container mx-auto text-white bg-black bg-opacity-20 z-50 rounded-xl ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-10 rounded-full"
            src="https://i.ibb.co.com/7Xvg5ZN/logo-for-chill-gamer-website.jpg"
            alt=""
          />
          <h1 className="text-xl font-medium sm:text-2xl sm:font-semibold lg:text-3xl xl:text-4xl xl:font-bold text-purple-500 flex">
            Chill<span className=" ml-1">Gamer</span>
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 xl:gap-4 text-xl font-medium ">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4 relative">
            <button>
              <img
                className="w-10 rounded-full my-anchor-element cursor-pointer"
                src={user?.photoURL}
                alt=""
              />
            </button>
            <Tooltip anchorSelect=".my-anchor-element" place="top">
              <div>
                <p className="text-white">{user?.displayName}</p>
                <p className="text-white">{user?.email}</p>
              </div>
            </Tooltip>
            <button
              onClick={toggleDarkMode}
              className="p-2 m-4 border rounded hidden sm:block"
            >
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
            </button>
            <button
              className="btn bg-purple-700 text-white"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : pathname === "/auth/login" ? (
          <Link
            className="btn mr-5 bg-purple-700 text-white"
            to={"/auth/register"}
          >
            Sign UP
          </Link>
        ) : (
          <Link
            className="btn mr-5 bg-purple-700 text-white"
            to={"/auth/login"}
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
