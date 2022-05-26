import React from 'react';

const ReviewContainer = ({ user, handleReview }) => {
    return (
        <>
            <h2 className='text-2xl py-5'>Write something about us</h2>
            <form onSubmit={handleReview} className='grid grid-cols-1 gap-3 mx-auto  w-[100%] px-5'>

                <label htmlFor="name" className='block'>  Name </label>
                <input name='name'
                    type="text"
                    value={user.name}
                    readOnly
                    disabled
                    className="input  input-bordered input-primary block  " />

                <label htmlFor="img" className='block'>  Image </label>
                <input name='img'
                    type="text"
                    placeholder='img url'
                    required
                    className="input  input-bordered input-primary block  " />

                <label htmlFor="rating" className='block'>  Rating </label>
                <input name='rating'
                    type="text"
                    placeholder='rating'
                    required
                    className="input  input-bordered input-primary block  " />


                <label className='block' htmlFor="review"> Review</label>
                <textarea
                    name="review"
                    id="" cols="30" rows="15"
                    placeholder='write reveiw'
                    required
                    className="input  input-bordered input-primary "></textarea>

                <input type="submit" value='review' className='btn btn-secondary block' />
            </form>
        </>
    );
};

export default ReviewContainer;