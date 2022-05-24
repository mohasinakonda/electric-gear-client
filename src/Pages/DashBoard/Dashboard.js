import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Deshboard = () => {
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


                    <li><Link to='/deshboard'>My items</Link></li>
                    <li><Link to='/deshboard/profile'>Profile</Link></li>
                    <li><Link to='/deshboard/review'>Review</Link></li>


                </ul>

            </div>
        </div>
    );
};

export default Deshboard;