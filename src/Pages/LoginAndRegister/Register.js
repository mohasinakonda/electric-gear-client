import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import auth from '../../Firebase.init'
import auth from '../../Firebase.init';
// import useToken from '../../hooks/useToken';
import Spinner from '../Shared/Spinner';

const Register = () => {
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    // const [token] = useToken(user)
    if (user) {
        navigate('/')
    }

    const handleName = (event) => {
        setUserName(event.target.value)
    }
    if (updating || loading) {
        return <Spinner></Spinner>
    }
    let errors
    if (error) {
        errors = error?.message
    }
    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        await updateProfile({ displayName: userName })
        await createUserWithEmailAndPassword(email, password)
        event.target.reset()
    }


    return (
        <div>



            <div className='w-[50%] mx-auto m-5'  >
                <div className='card bg-base-100 shadow-xl '>

                    <form onSubmit={handleRegister} className=' grid grid-cols-1 gap-3 mx-auto  w-[100%] px-5'>

                        <label htmlFor="name"> Name</label>
                        <input onChange={handleName} name='name' type="text" placeholder="Enter your name" class="input  input-bordered input-primary  " />

                        <label htmlFor="email"> Email</label>
                        <input name='email' type="email" placeholder="Enter your Email" class="input  input-bordered input-primary  " />


                        <label htmlFor="password"> Password</label>

                        <input type="password" name='password' placeholder="password" class="input  input-bordered input-primary w-[100%]  " />
                        <input type="submit" value='submit' className='btn btn-secondary' />
                        <p className='text-error'>{errors}</p>
                    </form>
                    <p className='p-5'>Alredy have an accound ? <Link to='/login' className='text-primary '>Login here</Link></p>
                    <div class="divider">OR</div>

                </div>

            </div>
        </div>

    );
};

export default Register;