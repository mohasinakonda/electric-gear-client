import React from 'react';
import img from '../../assests/images/banner-img.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ background: `url(${img})`, backgroundSize: 'cover' }} >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl ">Welcome to see  our <span className='text-primary font-bold'>Electric Gear</span> </h1>
                    <p className="mb-5 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;