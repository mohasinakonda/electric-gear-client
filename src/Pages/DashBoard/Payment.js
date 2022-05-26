import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3LwEDheQUwH0nsXiUe1rqbOuVguJrcpD9UeayGgaW9FDr6O5kWO2Exoq6CMCKtLPJvlkbyu1w3l5OBGQhKXQPS00YflI9Rgr');

const Payment = () => {
    const { id } = useParams();
    const url = `https://electric-gear.herokuapp.com/orders/${id}`;

    const { data, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, </p>
                    <h2 class="card-title">Please Pay for {data.name}</h2>

                    <p>Please pay: ${data.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={data} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;