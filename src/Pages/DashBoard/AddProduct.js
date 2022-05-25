import React from 'react';
import { toast } from 'react-toastify';


const AddProduct = () => {

    const AddProduct = (event) => {
        const name = event.target.name.value
        const price = event.target.price.value
        const stock = event.target.quantity.value
        const description = event.target.description.value
        const img = event.target.img.value
        const product = { name, price, stock, description, img, status: 'avialable' }
        fetch('http://localhost:5000/tools', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                toast.success('product successfuly added')
                if (data) {
                    console.log(data)
                }
            })

    }
    return (
        <div>

            <div className='w-[50%] mx-auto m-5'  >
                <div className='card bg-base-100 shadow-xl '>

                    <form onSubmit={AddProduct} className=' grid grid-cols-1 gap-3 mx-auto  w-[100%] px-5'>

                        <label htmlFor="name"> Product Name </label>
                        <input name='name' type="text" placeholder="Enter Product name"
                            required className="input  input-bordered input-primary  " />

                        <label htmlFor="price"> Price</label>
                        <input name='price' type="number" placeholder=" price" className="input  input-bordered input-primary  " />


                        <label htmlFor="quantity"> Quantity</label>

                        <input type="number" name='quantity' placeholder="quantity" className="input  input-bordered input-primary w-[100%]  " />

                        <label htmlFor="img"> Image url</label>

                        <input type="text" name='img' placeholder="img url" className="input  input-bordered input-primary w-[100%]  " />

                        <label htmlFor="description"> Descripton</label>
                        <textarea name="description" id="" cols="30" rows="10" placeholder='desccription' className="input  input-bordered input-primary   "></textarea>

                        <input type="submit" value='add' className='btn btn-secondary' />

                    </form>

                </div>

            </div>
        </div>

    );
};

export default AddProduct;