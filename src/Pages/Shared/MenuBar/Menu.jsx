import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaCartArrowDown, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/Provider';
import useCartItems from '../../../Hooks/useCartItems';

const Menu = () => {
    const { user, setUser, logOutUser } = useContext(authContext);
    const [ cart ] = useCartItems();
    // const cart = [];
    const menuItem = <div className='flex items-center'>
        <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/'}>Home</Link>
        <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/our-menu'}>Our Menu</Link>
        <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/our-shop/salad'}>Our Shop</Link>
        {
            user && <Link className='px-3 py-1 hover:text-orange-500 duration-500 flex items-center gap-2' to={'/dashboard'}>Dashboard
            <div className='relative'>
                <FaCartArrowDown className='h-8 w-10 bg-orange-600 hover:text-white p-2 rounded-full' />
                <p className="absolute -top-1 -right-6 rounded-full text-xs px-2 py-[2px] bg-green-500 text-white ">+{cart?.length || 0}</p>
            </div>
        </Link>
        }
        <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/contact-us'}>Contact Us</Link>
        {
            user ?
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user.photoURL ?
                                    <img src={user.photoURL} />
                                    :
                                    <FaUserCircle className='w-full h-full' />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-40">
                        <li><a>{user.displayName}</a></li>
                        <li onClick={handleLogOut}><a>Logout</a></li>

                    </ul>
                </div>
                :
                <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/login'}>Login</Link>
        }
    </div>
    // logging out the user
    function handleLogOut() {
        logOutUser()
            .then(() => { toast.success('LogOut Successful'); setUser('') });
    }
    return (
        <section>
            <div className="navbar bg-black text-gray-100 fixed z-10 bg-opacity-50">
                <div className="navbar-start">
                    {/* <Link className='flex justify-center items-center gap-3'>
                        <p className='text-2xl'>Bistro Boss</p>
                    </Link> */}
                    <Link className='uppercase flex flex-col justify-center text-xl  md:text-3xl text-white '>Bistro Boss
                        <span className='text-[10px] -mt-3 lg:-mt-4 tracking-[6px] md:tracking-[12px] '>Restaurant</span>
                    </Link>
                </div>
                <div className="navbar-end ">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={1} className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black text-left rounded-box w-48 right-0">
                            <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/'}>Home</Link>
                            <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/our-menu'}>Our Menu</Link>
                            <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/our-shop/salad'}>Our Shop</Link>
                            {
                                user && <Link className='px-3 py-1 hover:text-orange-500 duration-500 flex items-center gap-2' to={'/dashboard'}>Dashboard
                                    <div className='relative'>
                                        <FaCartArrowDown className='h-8 w-10 bg-orange-600 p-2 rounded-full' />
                                        <p className="absolute -bottom-[18px] -right-2 rounded-full text-xs px-2 py-1 bg-green-500 text-white ">+{cart?.length || 0}</p>
                                    </div>
                                </Link>
                            }
                            <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/contact-us'}>Contact Us</Link>
                            {
                                user ?
                                    <div className="mt-1">
                                            <div className=" btn btn-ghost btn-circle avatar">
                                                {
                                                    user.photoURL ?
                                                        <img src={user.photoURL} className='rounded-full'/>
                                                        :
                                                        <FaUserCircle className='w-full h-full rounded-full' />
                                                }
                                            </div>
                                            <p className='text-lg pl-2'>{user.displayName}</p>
                                            <button onClick={handleLogOut} className='bg-red-500 text-white rounded-lg text-center mx-auto w-full py-2 mt-2'>Logout</button>
                                    </div>
                                    :
                                    <Link className='px-3 py-1 hover:text-orange-500 duration-500' to={'/login'}>Login</Link>
                            }
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