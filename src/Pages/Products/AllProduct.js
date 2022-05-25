import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import SampleProduct from '../Home/SampleProduct';
import Spinner from '../Shared/Spinner';

const AllProduct = () => {
    const [data, isLoading] = useProduct()
    const navigate = useNavigate()
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div >
            <h2 className='text-2xl py-10'>Products </h2>
            <div className='grid lg:grid-cols-3 gap-5 px-5'>

                {data.map(product => <SampleProduct key={product._id} product={product}></SampleProduct>)}
            </div>
        </div>

    );
};

export default AllProduct;