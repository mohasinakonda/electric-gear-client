import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import Spinner from '../Shared/Spinner';

const MyItem = () => {
    const [user] = useAuthState(auth)


    const { data, isLoading } = useQuery('my-items', () => fetch(`http://localhost:5000/order?email=${user.email}`, {
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
    const handleBtn = () => {
        console.log(handleBtn)
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>

                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(product => <MyItem
                            key={product._id}
                            product={product}
                            handleBtn={handleBtn}
                        ></MyItem>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default MyItem;