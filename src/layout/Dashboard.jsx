import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FiMenu, FiShoppingCart, } from 'react-icons/fi';
import { GiForkKnifeSpoon, GiWallet } from "react-icons/gi";
import { FaBook, FaCalendarAlt, FaHome, FaUsers } from "react-icons/fa";
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();

    //todo: loade data from the server based on the DATA
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-[#d1a054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full  text-base-content">
                    {/* Sidebar content here */}

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminhome'><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><GiForkKnifeSpoon />Add An Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'><FiShoppingCart />Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/bookings'><FaBook />Manage Bookings </NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers />All Users </NavLink></li>
                        </>
                            : <>
                                <li><NavLink to='/dashboard/userhome'><FaHome />User Home</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'><FiShoppingCart /> My Cart <span className='bg-purple-400 rounded-lg' > +{cart?.length || 0}</span></NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt />Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/history'><GiWallet />Payment History</NavLink></li>
                            </>
                    }



                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'><FiMenu />Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>


                </ul>

            </div>
        </div>

    );
};

export default Dashboard;