import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinner from '../Shared/Spinner';

const ProductsDetails = () => {
    const [user] = useAuthState(auth)

    const [quantity, setQuantity] = useState('')
    const [error, setError] = useState('')
    const [disable, setDisable] = useState(true)
    const { productId } = useParams()

    const navigate = useNavigate()
    const { data, isLoading } = useQuery('products', () => fetch(' https://electric-gear.herokuapp.com/tools').then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }
    const ProductsDetails = data.find((product) => product._id === productId)
    const { _id, img, name, price, description, productWeight, stock } = ProductsDetails

    const handleOrder = (event) => {

        const itmemQuantity = event.target.value
        const itemQuantityNumber = Number(itmemQuantity)
        if (itemQuantityNumber < 100) {
            setError('minimum order quantity 100pc')
            setDisable(true)
            return
        } else if (itemQuantityNumber > stock) {
            setDisable(true)
            setError('you cross stock quantity ')
            return
        }
        setDisable(false)
        setError('')
        setQuantity(itemQuantityNumber)
    }

    const handleOrderItem = (id) => {
        const orders = { name, price, quantity, stock, img, email: user.email }

        fetch(' https://electric-gear.herokuapp.com/orders', {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(order => {
                toast('order completed')

            })


    }
    return (
        <div className="grid lg:grid-cols-2 lg:card-side bg-base-100 shadow-xl p-10">
            <figure><img src={img} className='w-[90%]' alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='font-bold'>Price:${price}</p>
                <p className='font-bold'>weight:{productWeight}</p>
                <p className='font-bold'>Diamention:300mm/120mm</p>
                {stock > 0 ? <p className='font-bold'> Status : avilable</p> : <p className='text-red-500 font-bold'>  Not avilable</p>
                }
                <p className='font-bold'>Stock: {stock}</p>
                <p> <span className='font-bold'>description : </span>{description}</p>
                <form >
                    <label className='font-bold py-3' htmlFor="orderQuantity"> Plase your order [min-100 pc]</label>
                    <input onChange={handleOrder} type="number" name='orderQuantity' placeholder="Place your order quantity" className="input input-bordered input-primary w-full max-w-xs py-3" />
                </form>
                <p className='text-red-500'>{error}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleOrderItem(_id)}
                        className="btn btn-primary"
                        disabled={disable}
                    >Order & checkout</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;