import React from 'react';
import useProduct from '../../hooks/useProduct';
import Spinner from '../Shared/Spinner';
import Items from './Items';

const ManageProducts = () => {
    const [data, isLoading] = useProduct()
    if (isLoading) {
        return <Spinner />
    }
    const handleBtn = () => {
        console.log('click from admin')
    }
    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map(product => <tr key={product._id}>

                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src={product.img} alt={product.name} />
                                            </div>
                                        </div>

                                    </div>
                                </td>

                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>

                                <td>
                                    <button class="btn btn-ghost btn-xs">update</button>

                                    <button class="btn bg-red-500 btn-xs">delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>




                </table>
            </div>
        </div>
    );
};

export default ManageProducts;