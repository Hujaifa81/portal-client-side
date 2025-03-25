import React from 'react';
import Slider from '../components/slider/Slider';
import TrendingMovies from '../components/TrendingMovies';
import Newsletter from '../components/Newsletter';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import useTitle from '../hooks/UseTitle';


const Home = () => {
    useTitle()
    return (
        <div>
            <Slider></Slider>
            <TrendingMovies></TrendingMovies>
            <Newsletter></Newsletter>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;