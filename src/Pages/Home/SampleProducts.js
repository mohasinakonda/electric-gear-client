import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner'
import SampleProduct from './SampleProduct';
// import {useQuery} from 'react-query'
const SampleProducts = () => {
    const { data, isLoading } = useQuery('products', () => fetch('http://localhost:5000/tools').then(res => res.json()))
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h2 className='text-2xl text-secondary py-10'>Sample Products</h2>
            <div className='grid lg:grid-cols-3 gap-5 px-5'>
                {
                    data.slice(0, 6).map(product => <SampleProduct key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default SampleProducts;