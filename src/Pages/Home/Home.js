import React from 'react';
import Banner from './Banner';
import SampleProducts from './SampleProducts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-secondary'>
            <Banner></Banner>
            <SampleProducts></SampleProducts>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;