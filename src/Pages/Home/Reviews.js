import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const [reversUser, setReverseUser] = useState([])
    const { data: users, isLoading } = useQuery('review', () => fetch(' https://electric-gear.herokuapp.com/review')
        .then(res => res.json())
    )

    /* useEffect(() => {
        fetch(' https://electric-gear.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReverseUser(data))

    }, []) */

    if (isLoading) {
        return <Spinner />
    }

    const revers = users.reverse().slice(0, 3)
    console.log(revers)


    return (
        <div >
            <hr />
            <h2 className='text-3xl  text-accent p-10'>Happy client</h2>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2'>


                {
                    revers?.map(user => <ReviewCard
                        key={user._id}
                        user={user}

                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;