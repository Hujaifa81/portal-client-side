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

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader:()=>fetch("https://portal-backend-seven.vercel.app/sorted-movies")
            
        },
        {
            path:'/add-movie',
            element: <AddMovie></AddMovie>

        },
        {
          path:'/details/:id',
          element:<Details></Details>,
          loader:({params})=>fetch(`https://portal-backend-seven.vercel.app/movie/${params.id}`)
        },
        {
          path:'/all-movies',
          element:<AllMovies></AllMovies>,
          loader:()=>fetch("https://portal-backend-seven.vercel.app/movies")
        },
        {
          path:'/my-favorites/:email',
          element:<MyFavorite></MyFavorite>,
          loader:({params})=>fetch(`https://portal-backend-seven.vercel.app/favorite-movies/${params.email}`)
        },
        {
          path:'/update-movie',
          element:<UpdateMovie></UpdateMovie>
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