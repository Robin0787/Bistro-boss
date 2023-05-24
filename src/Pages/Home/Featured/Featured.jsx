import React from 'react';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import featuredImage from "../../../assets/home/featured.jpg";

const Featured = () => {
    return (
        <section className='mb-14 lg:mb-20 mx-auto bg-featuredImg bg-fixed bg-cover bg-no-repeat bg-opacity-50 '>
            <section className='bg-black bg-opacity-50 py-10'>
                <article className='text-white w-4/5 md:w-full mx-auto'>
                    <SectionHeader subHeading={'Check it Out'} heading={'Featured Item'} />
                </article>
                <article className='md:flex items-center justify-center space-y-3'>
                    <div className='md:w-1/2'>
                        <img src={featuredImage} alt="" className='h-3/4 w-3/4 mx-auto rounded-md'/>
                    </div>
                    <div className=' md:w-1/2 px-12 md:px-0'>
                        <p className='text-gray-200 text-sm md:text-md'>March 20, 2023</p>
                        <h3 className='text-gray-100 text-2xl'>WHERE CAN I GET SOME?</h3>
                        <p className='text-gray-300 text-justify md:w-4/5 md:text-xs lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='text-gray-200 border-b-2 rounded-md hover:bg-white hover:text-black outline-white px-5 py-1 duration-500 mt-2 lg:mt-4'>Read More</button>
                    </div>
                </article>
            </section>
        </section>
    );
};

export default Featured;