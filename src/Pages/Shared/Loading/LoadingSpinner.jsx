import React from 'react';

const LoadingSpinner = () => {

    return (
        <div className='flex justify-center items-center my-10'>
            <p className="text-3xl md:text-5xl lg:text-7xl font-thin">L</p>
            <div className='w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 border-8 border-dashed rounded-full animate-spin mt-2 md:mt-4 lg:mt-5 border-blue-400'></div>
            <p className="text-3xl md:text-5xl lg:text-7xl font-thin">ading...</p>
        </div>
    );
};

export default LoadingSpinner;