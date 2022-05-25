import React from 'react';
import useProduct from '../../hooks/useProduct';
import Spinner from '../Shared/Spinner'
import SampleProduct from './SampleProduct';

const SampleProducts = () => {

    const [data, isLoading] = useProduct()
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