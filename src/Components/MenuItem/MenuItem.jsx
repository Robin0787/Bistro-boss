import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className='flex gap-3 p-2'>
            <img src={image} alt="" className='w-20 h-20  md:w-24 rounded-bl-[200px] rounded-tr-[200px] rounded-br-[200px]'/>
            <div className='md:flex items-center justify-between space-y-2 gap-4'>
            <div className='flex flex-col gap-2'>
                <h2 className="text-lg text-gray-700">{name} ------------------</h2>
                <p className="text-sm text-gray-500">{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;