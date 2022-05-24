import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleLogOut = () => {
        localStorage.removeItem('access-token')
        signOut(auth)
    }
    const navItem = <>
        <li>

            <Link to='/'>Home</Link>
        </li>
        <li>

            <Link to='products'>products</Link>
        </li>
        <li>

            <Link to='/blogs'>Blogs</Link>
        </li>
        <li>

            <Link to='/dashboard'>Dashboard</Link>
        </li>
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}

                    </ul>
                </div>
                <Link to='/' class=" normal-case text-xl ">Electric Gear</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navItem}

                </ul>
            </div>
            <label tabIndex="1" for="open-side-nav" className="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
            </label>
            <div class="navbar-end">

                {!user ? <Link to='/login'>Login</Link> :

                    <button onClick={handleLogOut} className='btn btn-outline  btn-sm btn-secondary text-gradient-to-r from-primary to-secondary'>Log out</button>}

            </div>
        </div>
    );
};

export default Navbar;