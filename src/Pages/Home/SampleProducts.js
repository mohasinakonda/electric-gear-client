import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner'
// import {useQuery} from 'react-query'
const SampleProducts = () => {
    const { data, isLoading } = useQuery('products', () => fetch('data.json').then(res => res.json()))
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h2 className='text-2xl text-secondary'>Sample Products</h2>
            <p>data :{data.length}</p>

        </div>
    );
};

export default SampleProducts;