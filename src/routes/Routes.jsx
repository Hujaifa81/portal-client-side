import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import AddMovie from "../pages/AddMovie";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Details from "../pages/Details";
import AllMovies from "../pages/AllMovies";
import MyFavorite from "../pages/MyFavorite";
import UpdateMovie from "../pages/UpdateMovie";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../pages/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader:()=>fetch("https://portal-backend-seven.vercel.app/sorted-movies")
            
        },
        {
            path:'/add-movie',
            element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>

        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=>fetch(`https://portal-backend-seven.vercel.app/movie/${params.id}`)
        },
        {
          path:'/all-movies',
          element:<AllMovies></AllMovies>,
          loader:()=>fetch("https://portal-backend-seven.vercel.app/movies")
        },
        {
          path:'/my-favorites/:email',
          element:<PrivateRoute><MyFavorite></MyFavorite></PrivateRoute>,
          loader:({params})=>fetch(`https://portal-backend-seven.vercel.app/favorite-movies/${params.email}`)
        },
        {
          path:'/update-movie',
          element:<PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>
        },
        {
          path:'/about-us',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/contact-us',
          element:<ContactUs></ContactUs>
        }
      ]
    },
    {
      path:'/sign-up',
      element:<SignUp></SignUp>
    },
    {
      path:"/sign-in",
      element:<SignIn></SignIn>
    }
  ]);