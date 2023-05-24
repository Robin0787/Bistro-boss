import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png";

const Menu = () => {
    const menuItem = <>
        <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/'}>Home</Link>
        <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/contact-us'}>Contact Us</Link>
        <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/dashboard'}>Dashboard</Link>
        <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/our-menu'}>Our Menu</Link>
        <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/our-shop'}>Our Shop</Link>
    </>
    return (
        <section>
            <div className="navbar bg-gray-100 text-black ">
                <div className="navbar-start">
                    <Link className='flex justify-center items-center gap-3'>
                        <img src={logo} alt="" className='h-10 w-10' />
                        <p className='text-2xl text-black'>Bistro Boss</p>
                    </Link>
                </div>
                <div className="navbar-end ">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black text-center rounded-box w-48 right-2">
                            {menuItem}
                        </ul>
                    </div>
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Menu;