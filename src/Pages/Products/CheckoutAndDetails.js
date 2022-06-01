import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

import { useParams } from 'react-router-dom';

import useOder from '../../hooks/useOrder';

import CheckoutForm from '../DashBoard/CheckoutForm';
import Spinner from '../Shared/Spinner';
const stripePromise = loadStripe('pk_test_51L3LwEDheQUwH0nsXiUe1rqbOuVguJrcpD9UeayGgaW9FDr6O5kWO2Exoq6CMCKtLPJvlkbyu1w3l5OBGQhKXQPS00YflI9Rgr');

const CheckoutAndDetails = () => {
    const { productId } = useParams()
    const [data, isLoading] = useOder()
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const order = data?.find(product => product._id === productId)
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello,Your order summary !!</p>
                    <h2 class="card-title">Please Pay for {order.name}</h2>
                    <p>Your total cost: <span className='text-orange-700'>$ {order.price * order.quantity}</span> </p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default CheckoutAndDetails;