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
            <h2 className='text-2xl text-accent p-10'>Sample Products</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-5'>
                {
                    data.reverse().slice(0, 6).map(product => <SampleProduct key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default SampleProducts;