import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Modal = ({ users, setUsers, }) => {
    const [user] = useAuthState(auth)
    const matchUser = users?.find(match => match.email === user.email)

    // update profile 
    const handleUserUpdate = (event) => {
        event.preventDefault()
        const age = event.target.age.value
        const country = event.target.country.value
        const img = event.target.img.value
        const city = event.target.city.value
        const updateInfo = { age, country, city, img }

        fetch(`http://localhost:5000/users/update/${user.email}`, {
            method: "put",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('access-token')}`,
            },
            body: JSON.stringify(updateInfo)
        }).then(res => res.json())
            .then(data => {
                setUsers(null)
                // refetch()
                console.log(data)
            })
    }
    return (
        <div>

            <input type="checkbox" id="open-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="open-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleUserUpdate} className=' grid grid-cols-1 gap-3 mx-auto  w-[100%] px-5'>

                        <label htmlFor="name"> Name</label>
                        <input name='name'
                            type="text"
                            value={matchUser?.name}
                            readOnly
                            disabled
                            className="input  input-bordered input-primary  " />

                        <label htmlFor="email"> Email</label>
                        <input name='email'
                            type="email"
                            readOnly
                            disabled
                            value={matchUser?.email} className="input  input-bordered input-primary  " />


                        <label htmlFor="img"> Image url</label>

                        <input type="text" name='img' placeholder="image url" className="input  input-bordered input-primary w-[100%]  " />

                        <label htmlFor="age"> Age</label>

                        <input type="text" name='age' placeholder="age" className="input  input-bordered input-primary w-[100%]  " />


                        <label htmlFor="country"> Country</label>

                        <input type="text" name='country' placeholder="country" className="input  input-bordered input-primary w-[100%]  " />

                        <label htmlFor="city"> City</label>

                        <input type="text" name='city' placeholder="city" className="input  input-bordered input-primary w-[100%]  " />

                        <input type="submit" className='btn' value='update' />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;