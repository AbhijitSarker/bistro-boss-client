import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()

    }

    const navOptions = <>
        <li><Link to='/'>Home </Link></li>
        <li><Link to='/menu'>Our Menu </Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li>
            <Link to='/secret'>
                <button className="btn">
                    <FiShoppingCart />
                    <div className="badge badge-secondary">+99</div>
                </button>
            </Link>
        </li>


        {
            user ?
                <>

                    <button onClick={handleLogout} className="btn btn-active btn-ghost">Logout</button>
                </>
                : <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
    </>
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl text-white mx-auto bg-base-100 opacity-70">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/'>
                        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;