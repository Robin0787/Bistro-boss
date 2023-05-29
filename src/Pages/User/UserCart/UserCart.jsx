import React from 'react';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useCartItems from '../../../Hooks/useCartItems';

const UserCart = () => {
    const [cart, refetch] = useCartItems();
    const totalPrice = cart.reduce((prevValue, item) => prevValue + item.price, 0);
    
    function deleteItem (id) {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:1000/delete/${id}`, {
                method: "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0) {
                    toast.success('Deleted');
                    refetch();
                }else {
                    toast.error('Error');
                }
              })
            }
          })
    }

    return (
        <section className='flex flex-col justify-center text-black bg-gray-100'>
            <SectionHeader subHeading={'My Cart'} heading={'Wanna Add More?'} />
            <article className='px-4 md:px-10 lg:px-20'>
                <div className='bg-white p-5'>
                    <div className='flex justify-between items-center uppercase font-semibold'>
                        <h2 className="text-sm md:text-xl lg:text-2xl  ">Total Orders : {cart.length}</h2>
                        <h2 className="text-sm md:text-xl lg:text-2xl">Total Price : ${totalPrice}</h2>
                        <button className='bg-indigo-800 text-white text-xs md:text-md p-2 md:px-5 md:py-2 rounded-md'>Pay</button>
                    </div>
                </div>
                <div className="md:px-6 py-4  bg-white mb-5">
                    <table className='table-auto border w-full text-center'>
                        <thead>
                        <tr className='border bg-gray-100'>
                            <th className='py-6 md:py-8'></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody className='divide-y'>
                            {
                                cart.map((item, index) => (<tr className='text-sm mb-4' key={item._id}>
                                    <td className='p-4'>{index + 1}</td>
                                    <td className='p-3'>
                                        <img src={item.image} className="h-10 w-10 md:h-20 md:w-20 mx-auto rounded-xl" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td> <FaTrashAlt className='text-blue-500 mx-auto cursor-pointer hover:text-red-500 duration-300' onClick={() => deleteItem(item._id)}/></td>
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

export default UserCart;