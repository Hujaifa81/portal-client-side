import React, {  useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);
    const loadedMovies=useLoaderData()
    useEffect(()=>{
        const slicedMovies=loadedMovies.slice(0,4)
        setMovies(slicedMovies)
    },[loadedMovies])
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
             <h2 className="text-3xl font-bold mb-2 text-center text-red-600">Trending Movies🔥</h2>
             <p className="text-gray-500 mb-4 font-medium text-lg text-center">Discover the hottest movies everyone is talking about right now!</p>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    movies.map(movie=><SingleCard key={movie._id} movie={movie}></SingleCard>)
                }
             </div>
             <div className='flex justify-center items-center'>
                    <button className="btn bg-red-600 text-white rounded-lg px-4 py-2 mt-4"><Link to='/all-movies'>See All Movies</Link></button>
             </div>

        </div>
    );
};

export default TrendingMovies;