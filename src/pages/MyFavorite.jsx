import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../components/SingleCard';
import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../hooks/UseTitle';

const MyFavorite = () => {
    
    const [favoriteMovies,setFavoriteMovies]=useState(useLoaderData())
    useTitle()
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
             <h2 className="text-3xl font-bold mb-2 text-center">Favorite Movies🔥</h2>
             <p className="text-gray-500 mb-4 font-medium text-lg text-center">Discover the hottest movies everyone is talking about right now!</p>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    favoriteMovies.map(movie=><SingleCard key={movie._id} movie={movie} favorite={true} favoriteMovies={favoriteMovies} setFavoriteMovies={setFavoriteMovies}></SingleCard>)
                }
             </div>

        </div>
    );
};

export default MyFavorite;