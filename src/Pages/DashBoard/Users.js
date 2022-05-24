import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';

const Users = () => {
    const { data, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button className='btn btn-sm'>make me admin</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Users;