import React from 'react';

const SectionButton = ({text}) => {
    return (
        <div className='flex justify-center mt-5'>
            <button className='text-black border-b-2 border-gray-700 rounded-md hover:bg-black hover:text-white  px-5 py-3 duration-500 font-semibold mt-2 lg:mt-4'>{text}</button>
        </div>
    );
};

export default SectionButton;