import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import Spinner from '../Shared/Spinner';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const { data, isLoading } = useQuery('my-items', () => fetch(`http://localhost:5000/orders?email=${user.email}`, {
        method: 'get',
        headers: {
            'authorization': `Bearen ${localStorage.getItem('access-token')}`
        }
    })
        .then(product => product.json())
    )
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        data.map(product => <tr>
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12 ms-3">
                                    <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <td>{product.name}</td>
                            <td>
                                $ {product.price}</td>
                            <td>{product.quantity}</td>
                            <td>
                                <button className='btn btn-sm'>{product.paid ? 'paid' : 'pay'}</button>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyItem;