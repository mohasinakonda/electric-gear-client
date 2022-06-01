import React from 'react';
import { FaTrash } from 'react-icons/fa';


const Items = ({ product, handleBtn, handleReject }) => {

    return (
        <>

            <tr>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12 ms-3">
                        <img src={product.img} alt={product.name} />
                    </div>
                </div>
                <td title={product.name}>{product.name.length > 30 ? product.name.slice(0, 24) + '...' : product.name}</td>
                <td>
                    $ {product.price}</td>
                <td>{product.quantity}</td>
                <td>$ {product.quantity * product.price}</td>
                <td>
                    <button onClick={() => handleBtn(product._id)} className='btn btn-sm m-2'>{product.paid ? 'paid' : 'pay'}</button>

                    <button onClick={() => handleReject(product._id, product.name)} className='btn btn-sm bg-red-500'><FaTrash /></button>

                </td>
            </tr>





        </>
    );
};

export default Items;