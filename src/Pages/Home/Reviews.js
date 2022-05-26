import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import Spinner from '../Shared/Spinner';
import ReviewCard from './ReviewCard';

const Reviews = () => {


    const { data: users, isLoading } = useQuery('review', () => fetch('http://localhost:5000/review')
        .then(res => res.json())
    )
    if (isLoading) {
        return <Spinner />
    }



    return (
        <div >
            <hr />
            <h2 className='text-2xl  text-secondary p-10'>Happy client</h2>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2'>


                {
                    users.slice(0, 3).reverse().map(user => <ReviewCard
                        key={user._id}
                        user={user}

                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;