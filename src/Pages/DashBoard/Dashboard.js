import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import Spinner from '../Shared/Spinner';

const Deshboard = () => {
    const [user] = useAuthState(auth)
    const { data, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))


    if (isLoading) {
        return <Spinner />
    }
    const adminInfo = data.find(admin => admin.email === user.email)
    console.log(adminInfo)
    return (
        <div class="drawer drawer-mobile">
            <input id="open-side-nav" type="checkbox" class="drawer-toggle" />
            <div className='drawer-content'>

                <h2 className='text-3xl text-secondary'>Dashboad</h2>
                <Outlet></Outlet>
            </div>
            {/* <!-- Page content here --> */}


            <div class="drawer-side">
                <label for="open-side-nav" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard/profile'>Profile</Link></li>

                    {adminInfo.role === 'admin' ? <>
                        <li>
                            <Link to='/dashboard/users'>Users</Link></li>
                        <li><Link to='/dashboard/add-product'>Add product</Link></li>
                        <li><Link to='/dashboard/manage-product'>Manage product</Link></li>
                    </>
                        :
                        <>
                            <li><Link to='/dashboard'>My items</Link></li>
                            <li><Link to='/dashboard/review'>Review</Link></li>
                        </>

                    }


                </ul>

            </div>
        </div>
    );
};

export default Deshboard;