import React from 'react';
import Banner from './Banner';
import SampleProducts from './SampleProducts';
import Review from './Review';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-secondary'>
            <Banner></Banner>
            <SampleProducts></SampleProducts>
            <Review></Review>

        </div>
    );
};

export default Home;