import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaBoxOpen, FaBoxes, FaUsers, FaWallet } from 'react-icons/fa';
import { authContext } from '../../../AuthProvider/Provider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AdminHome = () => {
    const { user } = useContext(authContext);
    const [axiosSecure] = useAxiosSecure();
    
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })

    return (
        <section className='bg-white min-h-screen p-10 space-y-5'>
            <article className='text-black'>
                <h2 className="text-xl">Hi, {user?.displayName}</h2>
            </article>
            <article className='text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5'>
                <div className='flex p-5 md:px-10 rounded-md bg-gradient-to-r from-pink-800  to-pink-300 justify-center items-center gap-5'>
                    <div className='sm:w-1/2'>
                        <FaWallet size={50} />
                    </div>
                    <div className='sm:w-1/2 text-center'>
                        <h2 className="text-4xl font-bold">{stats?.revenue}</h2>
                        <h2 className="text-lg font-semibold">Revenue</h2>
                    </div>
                </div>
                <div className='flex p-5 md:px-10 rounded-md bg-gradient-to-r from-indigo-800  to-indigo-300 justify-center items-center gap-5'>
                    <div className='sm:w-1/2'>
                        <FaUsers size={60} />
                    </div>
                    <div  className='sm:w-1/2 text-center'>
                        <h2 className="text-4xl font-bold">{stats?.users}</h2>
                        <h2 className="text-lg font-semibold">Customers</h2>
                    </div>
                </div>
                <div className='flex p-5 md:px-10 rounded-md bg-gradient-to-r from-green-800  to-green-300 justify-center items-center gap-5'>
                    <div className='sm:w-1/2'>
                        <FaBoxes size={60} />
                    </div>
                    <div className='sm:w-1/2 text-center'>
                        <h2 className="text-4xl font-bold">{stats?.products}</h2>
                        <h2 className="text-lg font-semibold">Products</h2>
                    </div>
                </div>
                <div className='flex p-5 md:px-10 rounded-md bg-gradient-to-r from-orange-800  to-orange-300 justify-center items-center gap-5'>
                    <div className='sm:w-1/2'>
                        <FaBoxOpen size={60} />
                    </div>
                    <div className='sm:w-1/2 text-center'>
                        <h2 className="text-4xl font-bold">{stats?.orders}</h2>
                        <h2 className="text-lg font-semibold">Orders</h2>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default AdminHome;