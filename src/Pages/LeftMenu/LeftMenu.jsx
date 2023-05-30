import React from 'react';
import { FaArrowCircleLeft, FaBars, FaBook, FaCalendarAlt, FaCalendarCheck, FaCartArrowDown, FaHome, FaShoppingBag, FaSms, FaStackOverflow, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import useCartItems from '../../Hooks/useCartItems';

const LeftMenu = () => {
    const [cart] = useCartItems();
    const isAdmin = true;
    const menus = isAdmin ?
        <>
            <NavLink to={'/dashboard/admin-home'}
                className={({ isActive }) => isActive ? 'active' : 'default'}>
                <FaHome data-tooltip-id="my-tooltip" data-tooltip-content="Home"/>
                <span className='hidden md:inline'>Admin Home</span>
            </NavLink>
            <NavLink to={'/dashboard/add-items'}
                className={({ isActive }) => isActive ? 'active' : 'default'}>
                <FaUtensils data-tooltip-id="my-tooltip" data-tooltip-content="Reservation" /> <span className='hidden md:inline'>Add Items</span>
            </NavLink>
            <NavLink to={'/dashboard/manage-items'}
                className={({ isActive }) => isActive ? 'active' : 'default'}>
                <FaWallet data-tooltip-id="my-tooltip" data-tooltip-content="Payment History" /> <span className='hidden md:inline'>Manage Items</span>
            </NavLink>
            <NavLink to={'/dashboard/manage-bookings'}
                className={({ isActive }) => isActive ? 'active' : 'default'}>
                <FaBook data-tooltip-id="my-tooltip" data-tooltip-content="Add Review" />
                <span className='hidden md:inline'>
                    <span className='hidden md:inline'>Manage Bookings</span>
                </span>
            </NavLink>
            <NavLink to={'/dashboard/all-users'}
                className={({ isActive }) => isActive ? 'active' : 'default'}>
                <FaUsers data-tooltip-id="my-tooltip" data-tooltip-content="My Bookings" /> <span className='hidden md:inline'>All Users</span>
            </NavLink>
        </>
        :
        <>
            <NavLink to={'/dashboard/my-home'}
                className={({ isActive }) => isActive ? 'active' : 'default'}>
                <FaHome data-tooltip-id="my-tooltip" data-tooltip-content="Home" />
                <span className='hidden md:inline'>My Home</span>
            </NavLink>
            <NavLink to={'/dashboard/my-reservation'}
                className={({ isActive }) => isActive ? 'active' : 'default'}>
                <FaCalendarAlt data-tooltip-id="my-tooltip" data-tooltip-content="Reservation" /> <span className='hidden md:inline'>Reservation</span>
            </NavLink>
            <NavLink to={'/dashboard/my-payment'}
                className={({ isActive }) => isActive ? 'active' : 'default'}>
                <FaWallet data-tooltip-id="my-tooltip" data-tooltip-content="Payment History" /> <span className='hidden md:inline'> Payment History</span>
            </NavLink>
            <NavLink to={'/dashboard/my-cart'}
                className={({ isActive }) => isActive ? 'active' : 'default'}>
                <FaCartArrowDown data-tooltip-id="my-tooltip" data-tooltip-content="My Cart" /> <span className='hidden md:inline'>My Cart
                    <span className='bg-[#ff3811] bg-opacity-80 text-white px-2 py-1 text-xs rounded-full ml-2'>{cart.length || 0}</span>
                </span>
            </NavLink>
            <NavLink to={'/dashboard/add-review'}
                className={({ isActive }) => isActive ? 'active' : 'default'}>
                <FaStackOverflow data-tooltip-id="my-tooltip" data-tooltip-content="Add Review" />
                <span className='hidden md:inline'>
                    <span className='hidden md:inline'>Add Review</span>
                </span>
            </NavLink>
            <NavLink to={'/dashboard/my-booking'}
                className={({ isActive }) => isActive ? 'active' : 'default'}>
                <FaCalendarCheck data-tooltip-id="my-tooltip" data-tooltip-content="My Bookings" /> <span className='hidden md:inline'>My Bookings</span>
            </NavLink>
        </>;

    return (
        <div className="drawer min-h-screen">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex md:block justify-center bg-indigo-900 ">
                <label htmlFor="my-drawer" className="py-4 w-ful text-center  text-lg cursor-pointer text-white bg-indigo-800 drawer-button hidden md:block ">Open Menu</label>
                <label htmlFor="my-drawer" className="py-4  -ml-5 sm:-ml-3 cursor-pointer  text-white md:bg-indigo-800 drawer-button md:hidden"><FaBars size={26} /></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 md:px-2 lg:p-6  w-80 text-white bg-indigo-950 uppercase flex flex-col justify-center gap-5">
                    <Link className='uppercase hidden md:flex flex-col justify-center  text-3xl text-white transform -rotate-90 md:rotate-0 origin-left'>Bistro Boss
                        <span className='text-[10px] -mt-3 md:tracking-[4px] lg:tracking-[11px] '>Restaurant</span>
                    </Link>
                    {menus}
                    <hr className='w-4/5 block my-5' />
                    <Link to={'/'} className='flex items-center gap-3 text-white'>
                        <FaHome data-tooltip-id="my-tooltip" data-tooltip-content="Home" />
                        <span className='hidden md:inline'>Home</span>
                    </Link>
                    <Link to={'/our-menu'} className='flex items-center gap-3 text-white'>
                        <FaBars data-tooltip-id="my-tooltip" data-tooltip-content="Menu" />
                        <span className='hidden md:inline'>Menu</span>
                    </Link>
                    <Link to={'/our-shop/salad'} className='flex items-center gap-3 text-white'>
                        <FaShoppingBag data-tooltip-id="my-tooltip" data-tooltip-content="Shop" /> <span className='hidden md:inline'>Shop</span>
                    </Link>
                    <Link className='flex items-center gap-3 text-white'>
                        <FaSms data-tooltip-id="my-tooltip" data-tooltip-content="Contact" />
                        <span className='hidden md:inline'>Contact</span>
                    </Link>
                    <label htmlFor='my-drawer' className='text-center cursor-pointer  text-red-500 drawer-button hidden md:flex items-center gap-2'><FaBars /> Close Menu </label>
                    <label htmlFor='my-drawer' className='text-center text-lg cursor-pointer block text-white drawer-button md:hidden'><FaArrowCircleLeft /></label>
                </ul>
            </div>
            <Tooltip id='my-tooltip' />
        </div>
    );
};

export default LeftMenu;    