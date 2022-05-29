import React from 'react';

const NotFound = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='w-[50%]' src='https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg' alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Opps page not Found</h1>
                    <p class="py-6 text-center text-xl font-bold">404 error</p>

                </div>
            </div>
        </div>
    );
};

export default NotFound;