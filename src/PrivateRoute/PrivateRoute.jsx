import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (!loading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
