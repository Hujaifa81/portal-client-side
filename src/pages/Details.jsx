import React, {  useContext, useEffect, useState } from "react";
import AwesomeStarsRating from "react-awesome-stars-rating";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import useTitle from "../hooks/UseTitle";

const Details = () => {
    const {user}=useContext(AuthContext)
    const navigate = useNavigate();
    const movie = useLoaderData()
    const [favorite,setFavorite]=useState(false)
    useTitle(movie.title)
    useEffect(() => {
        if (user && user.email) {  
            fetch(`https://portal-backend-seven.vercel.app/find-favorite-movie?email=${user.email}&movieId=${movie._id}`)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setFavorite(true);
                    }
                })
                .catch(error => console.error("Error fetching favorite movie:", error));
        }
    }, [user, movie._id]);  
    
    const handleAddToFavorite=async()=>{
        const {_id,...newMovie}=movie
        const favoriteMovie={
            ...newMovie,
            email:user?.email,
            movieId:movie._id,
            
        }
        
        const response = await fetch("https://portal-backend-seven.vercel.app/add-favorite", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(favoriteMovie),
        });

        const result = await response.json();
        setFavorite(true)
        toast.success("Movie added to favorite successfully!");

    }
    const handleDelete = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {  
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`https://portal-backend-seven.vercel.app/delete/${movie._id}`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" }
                    });
    
                    
    
                    const data = await response.json();
    
                    if (data.deletedCount === 1) {
                        toast.success("Movie deleted successfully!");
                        const response = await fetch(`https://portal-backend-seven.vercel.app/find-favorite-movie?email=${user.email}&movieId=${movie._id}`);
                        const data = await response.json();
                        if (data) {
                            const response = await fetch(`https://portal-backend-seven.vercel.app/delete-favoriteMovie-with-email-movieId?email=${user.email}&movieId=${movie._id}`, {
                                method: "DELETE",
                                headers: { "Content-Type": "application/json" }
                            });
            
                             const resultCheck=await response.json();
                             navigate("/all-movies");
                        }
                        
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: "Movie could not be deleted.",
                            icon: "error"
                        });
                    }
                } catch (error) {
                    console.error("Error deleting movie:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Something went wrong. Please try again.",
                        icon: "error"
                    });
                }
            }
        });
    };
    
    return (
        <div className="max-w-4xl mx-auto p-6 shadow-lg bg-white  rounded-lg">
            {/* Movie Poster */}
            <div className="relative w-full h-96">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Movie Info */}
            <div className="mt-6 space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {movie.title}
                </h2>

                {/* Genres */}
                <p className="text-sm dark:text-white">
                    Genres: {movie.genres.map((g, index) => (
                        <span key={index} className="mr-1">
                            {g}
                            {index !== movie.genres.length - 1 && ","}
                        </span>
                    ))}
                </p>

                {/* Duration & Year */}
                <p className="text-gray-500 dark:text-gray-300">
                    {movie.duration} min | {movie.year}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <StarRatings
                        rating={parseFloat(movie.rating)}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="2px"
                    />
                    <span className="text-sm text-gray-500">{movie.rating}/5</span>
                </div>

                {/* Summary */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {movie.summary}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-4">
                    <button className="btn bg-red-600" onClick={handleDelete}>Delete Movie</button>
                    <button className="btn btn-outline" disabled={favorite} onClick={handleAddToFavorite}>Add to Favorite</button>
                    <button className="btn bg-red-600"><Link to='/update-movie' state={movie}>Update Movie</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Details;