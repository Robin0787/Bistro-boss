import React from 'react';

const SectionCover = ({img, subHeading, heading, fontSize}) => {
    return (
        <div className={`hero h-[300px] md:h-[500px] lg:h-[700px]`} style={{ backgroundImage: `url("${img}")`, backgroundSize:'cover'}}>
                <div className="hero-content text-center text-neutral-content bg-black bg-opacity-60 w-2/3  md:w-1/2 h-2/5">
                    <div className="max-w-md">
                        <h1 className={`mb-2 md:mb-5 text-3xl md:text-${fontSize} font-normal text-white uppercase`}>{heading}</h1>
                        <p className="mb-5 uppercase text-xs md:text-sm text-gray-300">{subHeading}</p>
                    </div>
                </div>
            </div>
    );
};

export default SectionCover;