import React from 'react';

const SectionHeader = ({subHeading, heading}) => {
    return (
        <div className='my-8 md:w-4/12 mx-auto text-center'>
            <h3 className="text-md text-yellow-500 mb-3 italic md:text-sm">---{subHeading}---</h3>
            <h2 className="text-2xl lg:text-3xl uppercase py-5 border-y-2">{heading}</h2>
        </div>
    );
};

export default SectionHeader;