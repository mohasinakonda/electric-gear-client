import React from 'react';
import { toast } from 'react-toastify';
import useProduct from '../../hooks/useProduct';
import Spinner from '../Shared/Spinner';
import { FaTrash } from 'react-icons/fa';


const ManageProducts = () => {
    const [data, isLoading, refetch] = useProduct()
    if (isLoading) {
        return <Spinner />
    }
    const handleDelete = (id) => {
        fetch(` https://electric-gear.herokuapp.com/tools/${id}`, {
            method: 'delete',

        }).then(res => res.json())
            .then(result => {
                refetch()
                console.log(result)
                if (result.deletedCount === 1) {
                    toast.success(` is delete`)
                } else {
                    toast.error(` is  not delete`)
                }
            })
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

                                <td title={product.name}>{product.name.length > 30 ? product.name.slice(0, 24) + '...' : product.name}</td>
                                <td>$ {product.price}</td>
                                <td>{product.stock}</td>

                                <td>
                                    <button class="btn btn-ghost btn-xs">update</button>

                                    <button onClick={() => handleDelete(product._id)} class="btn bg-red-500 btn-xs"><FaTrash /></button>
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