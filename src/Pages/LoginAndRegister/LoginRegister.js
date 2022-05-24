import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
// import auth from '../../firebase.init';
import auth from '../../Firebase.init'
import useToken from '../../hooks/useToken';
// import useToken from '../../hooks/useToken';
import Spinner from '../Shared/Spinner';


const LoginRegister = () => {
    const [signInWithGoogle, user, googleloading] = useSignInWithGoogle(auth);
    const signWithGoogle = () => {
        signInWithGoogle()
    }
    const location = useLocation()
    const navigate = useNavigate()
    const [token] = useToken(user)

    let from = location.state?.from?.pathname || "/";
    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });

        }
    }, [from, user, navigate, token])
    if (googleloading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className='text-center'>


                <Link className='font-bold text-xl text-secondary p-3  ' to='/login'>Login</Link>
                or

                <Link className='font-bold text-xl text-secondary p-3' to='/login/register'>Register</Link>

            </div>
            <Outlet></Outlet>
            <div className='p-5  w-[50%] mx-auto shadow-lg'>

                <button onClick={signWithGoogle} className='btn btn-secondary w-[100%] '>sign In with google</button>
            </div>

        </div>
    );
};

export default LoginRegister;