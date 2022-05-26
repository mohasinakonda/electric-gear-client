import React from 'react';

const Items = ({ product, handleBtn }) => {
    return (
        <>

            <tr>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12 ms-3">
                        <img src={product.img} alt={product.name} />
                    </div>
                </div>
                <td>{product.name}</td>
                <td>
                    $ {product.price}</td>
                <td>{product.quantity}</td>
                <td>$ {product.quantity * product.price}</td>
                <td>
                    <button onClick={() => handleBtn(product._id)} className='btn btn-sm m-2'>{product.paid ? 'paid' : 'pay'}</button>

                    <button className='btn btn-sm bg-red-500'>Cancel</button>

                </td>
            </tr>





        </>
    );
};

export default Items;