import React from 'react';
import { useNavigate } from 'react-router-dom';

const SampleProduct = ({ product }) => {
    const { _id, name, description, price, img } = product
    const navigate = useNavigate()

    const handleProduct = (id) => {
        navigate(`products/${id}`)

    }
    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure><img src={img} className='w-[100%] h-[250px]' alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description.slice(0, 150)}</p>
                <p className='font-bold'> Price:${price}</p>
                <div class="card-actions ">
                    <button onClick={() => handleProduct(_id)} class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default SampleProduct;