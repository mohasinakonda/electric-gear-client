import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import Spinner from '../Shared/Spinner';

const Deshboard = () => {
    const [user] = useAuthState(auth)
    const { data, isLoading, } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'get',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Spinner />
    }

    const adminInfo = data?.find(admin => admin.email === user.email)

    return (
        <div className="drawer drawer-mobile">
            <input id="open-side-nav" type="checkbox" className="drawer-toggle" />
            <div className='drawer-content'>

                <h2 className='text-3xl text-secondary'>Dashboad</h2>
                <Outlet></Outlet>
            </div>
            {/* <!-- Page content here --> */}


            <div className="drawer-side">
                <label htmlFor="open-side-nav" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>Profile</Link></li>

                    {adminInfo?.role === 'admin' ? <>
                        <li>
                            <Link to='/dashboard/users'>Users</Link></li>
                        <li><Link to='/dashboard/add-product'>Add product</Link></li>
                        <li><Link to='/dashboard/manage-product'>Manage product</Link></li>
                    </>
                        :
                        <>
                            <li><Link to='/dashboard/my-items'>My items</Link></li>
                            <li><Link to='/dashboard/review'>Review</Link></li>
                        </>

                    }


                </ul>

            </div>
        </div>
    );
};

export default Deshboard;