import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinner from '../Shared/Spinner';
import ReviewContainer from './ReviewContainer';

const Review = () => {
    const [hookUser] = useAuthState(auth)
    const { data, isLoading, refetch } = useQuery('profile', () => fetch(` https://electric-gear.herokuapp.com/users/${hookUser.email}`, {
        method: 'get',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json())

    )
    if (isLoading) {
        return <Spinner />
    }

    const handleReview = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const img = event.target.img.value
        const rating = event.target.rating.value
        const review = event.target.review.value
        const reviewInfo = { name, img, rating, review }

        fetch(' https://electric-gear.herokuapp.com/review', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)

        })
            .then(res => res.json())
            .then(data => {

                toast.success('review added successfuly added')

            })
    }
    return (
        <div className='modal-box'>
            {
                data.map(user => <ReviewContainer
                    key={user._id}
                    user={user}
                    handleReview={handleReview}
                />)
            }
        </div>
    );
};

export default Review; <h2>Give me a review</h2>