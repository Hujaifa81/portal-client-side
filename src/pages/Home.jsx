import React from 'react';
import Slider from '../components/slider/Slider';
import TrendingMovies from '../components/TrendingMovies';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TrendingMovies></TrendingMovies>
        </div>
    );
};

export default Home;