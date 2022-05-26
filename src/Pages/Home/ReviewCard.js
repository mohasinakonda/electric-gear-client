import React from 'react';

const ReviewCard = ({ user }) => {


    return (
        <div class="card  shadow-xl">
            <div class="card-body">
                <div className='flex '>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='w-[100%]' src={user?.img} alt='' />
                        </div>
                    </div>
                    <div>

                        <h2 class="text-xl  font-bold m-3">{user?.name}</h2>
                        <small> rating: <span className='text-yellow-500'>{user.rating}</span></small>
                    </div>
                </div>
                <p>{user.review}</p>

            </div>
        </div>
    );
};

export default ReviewCard;