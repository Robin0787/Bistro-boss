import React from 'react';
import { toast } from 'react-hot-toast';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import useMenu from '../../../Hooks/useMenu';

const ManageItems = () => {
    const [menu, loading] = useMenu();
    return (
        <section className='bg-white min-h-screen'>
          <article className='text-black'>
            <SectionHeader subHeading={'Manage Items'} heading={'Manage All Items'} />
            </article>
            <article className='px-4 md:px-10 lg:px-20 text-gray-600'>
                <div className='bg-white p-5'>
                <h2 className="text-xl md:text-3xl font-semibold">Total Items: ${menu.length}</h2>
                </div>
                <div className="md:px-6 py-4  bg-white mb-5">
                    <table className='table-auto border w-full text-center'>
                        <thead>
                        <tr className='border bg-gray-100'>
                            <th className='py-6 md:py-8'></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody className='divide-y'>
                            {
                                menu.map((item, index) => (<tr className='text-sm mb-4' key={item._id}>
                                    <td className='p-4'>{index + 1}</td>
                                    <td className='p-3'>
                                        <img src={item.image} className="h-10 w-10 md:h-20 md:w-20 mx-auto rounded-xl" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td> <span className='block hover:bg-green-500 w-10 mx-auto py-3 rounded-full text-green-600 hover:text-white duration-300 cursor-pointer' onClick={() => {toast('Edit')}}>
                                    <FaEdit size={18} className=' mx-auto'/></span></td>
                                    <td> <span className='block hover:bg-red-500 w-10 mx-auto py-3 rounded-full text-red-600 hover:text-white duration-300 cursor-pointer' onClick={() => {toast('Delete')}}>
                                    <FaTrashAlt size={16} className=' mx-auto' /></span></td>
                                </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </article>
        </section>
    );
};

export default ManageItems;