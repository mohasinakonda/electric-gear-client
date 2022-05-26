import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import Spinner from '../Shared/Spinner';
import Modal from '../Modal/Modal'

const Profile = () => {
    const [users, setUsers] = useState(null)
    const [user] = useAuthState(auth)
    const { data, isLoading, refetch } = useQuery('profile', () => fetch('http://localhost:5000/users', {
        method: 'get',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json())

    )
    useEffect(() => {
        setUsers(data)


    }, [data])
    if (isLoading) {
        return <Spinner />
    }
    const userMatch = data?.find(match => match.email === user.email)
    if (userMatch) {
        refetch()
    }


    return (
        <div className='p-10 shadow-xl'>
            <div className='flex justify-between py-5'>

                <h2 className='text-2xl'>welcome <span className='font-bold'>{userMatch?.name}</span></h2>
                <label htmlFor='open-modal' className='btn  btn-sm'>edit</label >
            </div>
            <hr />
            <p>name: {userMatch?.name}</p>
            <p>email: {userMatch?.email}</p>
            <p>age: {userMatch?.age}</p>
            <p>city: {userMatch?.city}</p>
            <p>country: {userMatch?.country}</p>
            {users && <Modal users={users} setUsers={setUsers} ></Modal>}
        </div>
    );
};

export default Profile;