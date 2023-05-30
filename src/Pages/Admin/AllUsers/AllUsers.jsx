import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUser, FaUserShield } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`http://localhost:1000/users`)
        const data = res.json();
        return data;
    })
    function deleteUser(id) {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:1000/users/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount > 0){
                            refetch();
                        }
                })
            }
        })
    }
    function makeAdmin(id) {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Admin'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:1000/users/admin/${id}`, { method: "PATCH" })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                    })
            }
        })
    }
    return (
        <section className='bg-white min-h-screen'>
            <article className='text-black'>
                <SectionHeader subHeading={'How Many'} heading={'Manage All Users'} />
            </article>
            <article className='px-4 md:px-10 lg:px-20'>
                <div className='bg-white'>
                    <h2 className="text-2xl text-black font-semibold ">Total Users : {users.length}</h2>
                </div>
                <div className="py-4  bg-white mb-5">
                    <table className='table-auto border w-full text-center'>
                        <thead>
                            <tr className='border bg-gray-100'>
                                <th className='py-6 md:py-8'></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y'>
                            {
                                users.map((user, index) => (<tr className='text-sm mb-4' key={user._id}>
                                    <td className='p-4'>{index + 1}</td>
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ?
                                            <FaUserShield data-tooltip-id="my-tooltip" data-tooltip-content="Admin" size={22} className='text-blue-500 mx-auto cursor-pointer hover:text-indigo-700 duration-300' onClick={() => {}}/>
                                            :
                                            <FaUser data-tooltip-id="my-tooltip" data-tooltip-content="User" size={20} className='text-blue-500 mx-auto cursor-pointer hover:text-indigo-700 duration-300' onClick={() => makeAdmin(user._id)}/>
                                        }
                                    </td>
                                    <td> <FaTrashAlt size={18} className='text-blue-500 mx-auto cursor-pointer hover:text-red-500 duration-300' onClick={() => deleteUser(user._id)} /></td>
                                </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </article>
            <Tooltip id='my-tooltip' />
        </section>
    );
};

export default AllUsers;