import React from 'react';
import { Parallax } from 'react-parallax';


const HeaderOverText = ({ img, subHeading, heading, fontSize}) => {
    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={img}
            bgImageAlt="Menu Banner"
            strength={-200}
        >
            <div className="hero h-[300px] md:h-[500px] lg:h-[700px]">
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content bg-black bg-opacity-60 w-2/3  md:w-1/2 h-1/2">
                    <div className="max-w-md">
                        <h1 className={`mb-2 md:mb-5 text-3xl md:text-${fontSize} font-normal text-white uppercase`}>{heading}</h1>
                        <p className="mb-5 uppercase text-xs md:text-sm text-gray-300">{subHeading}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default HeaderOverText;