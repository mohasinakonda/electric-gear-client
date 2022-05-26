import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinner from '../Shared/Spinner';
import ReviewContainer from './ReviewContainer';

const Review = () => {
    const [hookUser] = useAuthState(auth)
    const { data, isLoading, refetch } = useQuery('profile', () => fetch(`http://localhost:5000/users/${hookUser.email}`, {
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

        fetch('http://localhost:5000/review', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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