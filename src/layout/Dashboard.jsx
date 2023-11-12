import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FiMenu, FiShoppingCart, } from 'react-icons/fi';
import { GiWallet } from "react-icons/gi";
import { FaCalendarAlt, FaHome } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-[#d1a054]">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full  text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to='/dashboard/home'><FaHome />User Home</NavLink></li>
                        <li><NavLink to='/dashboard/mycart'><FiShoppingCart /> My Cart</NavLink></li>
                        <li><NavLink to='/dashboard/reservation'><FaCalendarAlt />Reservation</NavLink></li>
                        <li><NavLink to='/dashboard/history'><GiWallet />Payment History</NavLink></li>
                        <div className="divider"></div>

                        <li><NavLink to='/'><FaHome />Home</NavLink></li>
                        <li><NavLink to='/menu'><FiMenu />Menu</NavLink></li>
                        <li><NavLink to='/order/salad'>Order Food</NavLink></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;