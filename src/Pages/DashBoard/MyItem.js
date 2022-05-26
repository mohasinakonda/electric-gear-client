import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import useMyItems from '../../hooks/useMyItem';
import Spinner from '../Shared/Spinner';
import Items from './Items'

const MyItem = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const [data, isLoading] = useMyItems(user)

    if (isLoading) {
        return <Spinner></Spinner>
    }
    const handleBtn = (id) => {
        navigate(`checkout/${id}`)
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
                        data.map(product => <Items
                            key={product._id}
                            product={product}
                            handleBtn={handleBtn}
                        ></Items>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default MyItem;