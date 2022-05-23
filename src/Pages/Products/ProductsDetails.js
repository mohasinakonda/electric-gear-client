import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';

const ProductsDetails = () => {
    const [quantity, setQuantity] = useState('')
    const [error, setError] = useState('')
    const { productId } = useParams()
    const { data, isLoading } = useQuery('products', () => fetch('http://localhost:5000/tools').then(res => res.json()))
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const ProductsDetails = data.find((product) => product._id === productId)
    const { img, name, price, description, productWeight, stock } = ProductsDetails

    const handleOrde = (event) => {
        const itmemQuantity = event.target.value
        const itmemQuantityNumber = Number(itmemQuantity)
        if (itmemQuantityNumber < 100) {
            setError('minimum order quantity 100pc')
            return
        } else if (itmemQuantityNumber > stock) {
            setError('you cross stock quantity ')
            return
        }
        setError('')
        setQuantity(itmemQuantityNumber)
    }
    return (
        <div class="grid lg:grid-cols-2 lg:card-side bg-base-100 shadow-xl p-10">
            <figure><img src={img} className='w-[90%]' alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='font-bold'>Price:${price}</p>
                <p className='font-bold'>weight:{productWeight}</p>
                <p className='font-bold'>Diamention:300mm/120mm</p>
                {stock > 0 ? <p className='font-bold'> Status : avilable</p> : <p className='text-red-500 font-bold'>  Not avilable</p>
                }
                <p className='font-bold'>Stock: {stock}</p>
                <p> <span className='font-bold'>description : </span>{description}</p>
                <form >
                    <label className='font-bold py-3' htmlFor="orderQuantity"> Plase your order [min-100 pc]</label>
                    <input onChange={handleOrde} type="number" name='orderQuantity' placeholder="Place your order quantity" class="input input-bordered input-primary w-full max-w-xs py-3" />
                </form>
                <p className='text-red-500'>{error}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Order</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;