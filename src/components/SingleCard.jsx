import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AwesomeStarsRating from "react-awesome-stars-rating";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const SingleCard = ({ movie,favorite,favoriteMovies,setFavoriteMovies }) => {
   
    const { _id, title, poster, genres, duration, rating } = movie;
    
    
    const handleDeleteFavorite = async () => {
        
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
                    const response = await fetch(`https://portal-backend-seven.vercel.app/delete-favoriteMovie/${_id}`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" }
                    });
    
                    
    
                    const data = await response.json();
    
                    if (data.deletedCount === 1) {
                        
                        setFavoriteMovies(favoriteMovies.filter((m) => m._id !== _id));
                        toast.success("Movie deleted successfully!");
                        
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
        <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <figure className="relative h-64 w-full">
                <img src={poster} alt={title} className="w-full h-full object-cover" />
            </figure>

            <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold">{title}</h2>

                <div className="flex flex-wrap gap-2">
                    {genres.map((g, index) => (
                        <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">
                            {g}
                        </span>
                    ))}
                </div>

                <p className="text-sm text-gray-600">
                    <span className="font-medium">Duration:</span> {duration} min
                </p>

                
                <div className="flex items-center gap-2">
                    <StarRatings
                        rating={parseFloat(rating)}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="2px"
                    />
                    <span className="text-sm text-gray-500">{rating}/5</span>
                </div>

                {
                    favorite?<div className="pt-2">
                    <button onClick={handleDeleteFavorite} className="bg-red-600 btn  w-full text-center">
                    Delete Favorite
                    </button>
                </div>:<div className="pt-2">
                    <Link to={`/details/${_id}`}  className="btn bg-red-600 w-full text-center text-white">
                        See Details
                    </Link>
                </div>
                }
            </div>
        </div>
    );
};

export default SingleCard;
