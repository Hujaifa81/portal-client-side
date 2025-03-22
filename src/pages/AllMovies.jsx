import React, {  useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../components/SingleCard';

const AllMovies = () => {
    const [movies,setMovies] = useState(useLoaderData())
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/movies?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
            
    },[search])
    

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                <input type="search" className="grow" placeholder="Search" name='search' onChange={(e)=>setSearch(e.target.value)} />
               
            </label>
            <h2 className="text-3xl font-bold mb-2 text-center">All Movies</h2>
            <p className="text-gray-500 mb-4 font-medium text-lg text-center">Discover the hottest movies everyone is talking about right now!</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    movies.map(movie => <SingleCard key={movie._id} movie={movie}></SingleCard>)
                }
            </div>

        </div>
    );
};

export default AllMovies;