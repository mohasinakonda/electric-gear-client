import React from 'react';
import Banner from './Banner';
import SampleProducts from './SampleProducts';
import Reviews from './Reviews';
import Footer from '../Shared/Footer';
import QA from './QA';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-secondary mt-7'>
            <Banner></Banner>
            <SampleProducts></SampleProducts>
            <Reviews></Reviews>
            <QA></QA>
            <Footer></Footer>

        </div>
    );
};

export default Home;