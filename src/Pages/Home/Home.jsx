import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Featured from './Featured/Featured';
import Popular_Menu from './Popular_Menu/Popular_Menu';
import Testimonials from './Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <div className='w-[80%] mx-auto'>
                <Categories />
                <Popular_Menu />
            </div>
            <Featured />
            <div className='w-[80%] mx-auto'>
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;