import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import Spinner from '../Shared/Spinner';

const Users = () => {
    // const [user] = useAuthState(auth)
    const { data, isLoading, refetch } = useQuery('users', () => fetch(' https://electric-gear.herokuapp.com/users', {
        method: 'get',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }

    const makeAdmin = (email) => {

        fetch(` https://electric-gear.herokuapp.com/users/admin/${email}`, {
            method: 'put',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data) {
                    refetch()
                    toast.success('done ! you are admin')
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

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
                            <td>
                                {user.role === 'admin' ? <p className='text-xl text-green-500'>Admin</p> :

                                    <button onClick={() => makeAdmin(user.email)} className='btn btn-sm'>make me admin</button>


                                }
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Users;