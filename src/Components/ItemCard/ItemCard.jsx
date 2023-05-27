import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';

const ItemCard = ({ item }) => {
    const { _id, name, recipe, image, category, price } = item;
    return (
        <div className='border flex flex-col rounded-md'>
            <div className='relative'>
            <img src={image} alt="" className='mx-auto'/>
            <p className='bg-gray-800 rounded px-3 py-1 text-white absolute top-2 right-2'>${price}</p>
            </div>
            <div className="flex flex-col justify-between gap-5 bg-gray-100 p-5 text-gray-500 grow">
            <div className='text-left space-y-2'>
                <h3 className="text-xl font-semibold text-gray-700">{name}</h3>
                <p>{recipe}</p>
                
            </div>
            <div className='flex justify-center items-center'>
                <button className='text-white flex justify-center items-center gap-2 px-3 py-1 rounded-md bg-orange-500 hover:bg-white hover:text-orange-600 hover:ring ring-orange-300 duration-500'>Add To Cart <FaCartArrowDown /></button>
            </div>
            </div>
        </div>
    );
};

export default ItemCard;