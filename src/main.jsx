import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import AuthLayout from "./Pages/Authentication/AuthLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddReview from "./Pages/Review/AddReview";
import AllReview from "./Pages/Review/AllReview";
import MyReviews from "./Pages/Review/MyReviews";
import ReviewsCardDetails from "./Pages/Review/ReviewsCardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ]
  },
  {
    path: '/addReview',
    element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
  },
  {
    path: '/allReviews',
    element: <AllReview></AllReview>,
    loader: () => fetch('http://localhost:5000/reviews')
  },
  {
    path: '/myReview',
    element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
    loader: () => fetch('http://localhost:5000/reviews')
  },
  {
    path: '/reviews/details/:id',
    element: <ReviewsCardDetails></ReviewsCardDetails> ,
    loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
  },
  
  {
    path: '*',
    element: 'error'
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
