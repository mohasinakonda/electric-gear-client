import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase.init';
import useProduct from '../../hooks/useProduct';
import Spinner from '../Shared/Spinner';

const CheckoutAndDetails = () => {
    const [user] = useAuthState(auth)
    const { productId } = useParams()
    const [data, isLoading] = useProduct(user)
    if (isLoading) {
        return <Spinner />
    }
    const matchProduct = data.find(product => product._id === productId)

    return (
        <div class="hero min-h-screen bg-base-200">

            <p>Product name {matchProduct.name}</p>

        </div>
    );
};

export default CheckoutAndDetails;