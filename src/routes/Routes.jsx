import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import AddMovie from "../pages/AddMovie";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Details from "../pages/Details";
import AllMovies from "../pages/AllMovies";
import MyFavorite from "../pages/MyFavorite";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader:()=>fetch("http://localhost:5000/sorted-movies")
            
        },
        {
            path:'/add-movie',
            element: <AddMovie></AddMovie>

        },
        {
          path:'/details/:id',
          element:<Details></Details>,
          loader:({params})=>fetch(`http://localhost:5000/movie/${params.id}`)
        },
        {
          path:'/all-movies',
          element:<AllMovies></AllMovies>,
          loader:()=>fetch("http://localhost:5000/movies")
        },
        {
          path:'/my-favorites/:email',
          element:<MyFavorite></MyFavorite>,
          loader:({params})=>fetch(`http://localhost:5000/favorite-movies/${params.email}`)
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