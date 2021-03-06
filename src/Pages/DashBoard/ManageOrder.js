import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner';
import useOrder from '../../hooks/useOrder'
import { FaTrash } from 'react-icons/fa';


const ManageOrder = () => {

    const [data, isLoading, refetch] = useOrder()
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const handleReject = (id, name) => {
        fetch(` https://electric-gear.herokuapp.com/orders/${id}`, {
            method: 'delete',
            headers: {

                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }

        }).then(res => res.json())
            .then(result => {
                refetch()
                console.log(result)

                if (result.deletedCount === 1) {
                    toast.success(`${name} is delete`)
                } else {
                    toast.error(`${name} is  not delete`)
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
                            <th>Email</th>
                            <th>product</th>
                            <th>quantity</th>
                            <th>price</th>
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

                                <td>{product.email}</td>
                                <td title={product.name}>{product.name.length > 30 ? product.name.slice(0, 24) + '...' : product.name}</td>
                                <td>$ {product.price}</td>
                                <td>{product.quantity}</td>

                                <td>
                                    <button class="btn btn-ghost btn-xs">delevery</button>

                                    <button onClick={() => handleReject(product._id, product.name)} class="btn bg-red-500 btn-xs"><FaTrash /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>




                </table>
            </div>
        </div>
    );
};

export default ManageOrder;