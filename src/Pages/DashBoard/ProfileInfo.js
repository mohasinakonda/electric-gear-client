import React from 'react';

const ProfileInfo = ({ user }) => {
    return (
        <div>
            <div className='flex justify-between py-5'>

                <h2 className='text-2xl'>welcome <span className='font-bold'>{user?.name}</span></h2>
                <label htmlFor='open-modal' className='btn  btn-sm'>edit</label >
            </div>
            <hr />
            <p>name: {user?.name}</p>
            <p>email: {user?.email}</p>
            <p>age: {user?.age}</p>
            <p>city: {user?.city}</p>
            <p>country: {user?.country}</p>
        </div>
    );
};

export default ProfileInfo;
