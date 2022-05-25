import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import Spinner from '../Shared/Spinner';

const Profile = () => {
    const [user] = useAuthState(auth)
    const { data, isLoading } = useQuery('profile', () => fetch('http://localhost:5000/users', {
        method: 'get',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json())

    )
    if (isLoading) {
        return <Spinner />
    }
    const userMatch = data.find(match => match.email === user.email)

    return (
        <div className='py-10 shadow-xl'>
            <h2 className='text-2xl'>welcome <span className='font-bold'>{userMatch.name}</span></h2>
            <p>name: {userMatch.name}</p>
            <p>email: {userMatch.email}</p>
        </div>
    );
};

export default Profile;