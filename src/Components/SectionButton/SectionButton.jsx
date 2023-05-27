import React from 'react';
import { Link } from 'react-router-dom';

const SectionButton = ({text, category}) => {
    return (
        <div className='flex justify-center mt-5'>
            <Link to={`/our-shop/${category}`} className='text-black border-b-2 border-gray-700 rounded-md hover:bg-black hover:text-white  px-5 py-3 duration-500 font-semibold mt-2 lg:mt-4'>{text}</Link>
        </div>
    );
};

export default SectionButton;