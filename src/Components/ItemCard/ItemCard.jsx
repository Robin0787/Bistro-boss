import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';

const ItemCard = ({ item }) => {
    const { _id, name, recipe, image, category, price } = item;
    return (
        <div className='border flex flex-col rounded-md'>
            <div className='relative'>
                <img src={image} alt="" className='mx-auto' />
                <p className='bg-gray-800 rounded px-3 py-1 text-white absolute top-2 right-2'>${price}</p>
            </div>
            <div className="flex flex-col justify-between gap-5 bg-gray-100 p-5 text-gray-500 grow">
                <div className='text-left space-y-2'>
                    <h3 className="text-xl font-semibold text-gray-700">{name}</h3>
                    <p>{recipe}</p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='text-black border-b-2 border-gray-700 rounded-md flex justify-center items-center gap-2 p-2 text-sm duration-300 font-semibold mt-2 lg:mt-4 hover:bg-gray-700 hover:text-white'>Add To Cart <FaCartArrowDown /></button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
