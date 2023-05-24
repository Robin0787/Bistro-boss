import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";


// import required modules
import { FreeMode, Pagination } from "swiper";
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';

const Categories = () => {
    return (
        <section className='my-14 lg:my-20 mx-auto '>
            <article className='text-black'>
                <SectionHeader subHeading={'From 11:00am to 10:00pm'} heading={'Order Online'} />
            </article>
            <article >
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='rounded-md' src={img1} alt="" />
                        <h2 className="text-lg absolute bottom-6 left-1/2 text-gray-700 -translate-x-1/2">SALADS</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-md' src={img2} alt="" />
                        <h2 className="text-lg absolute bottom-6 left-1/2  -translate-x-1/2">PIZZAS</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-md' src={img3} alt="" />
                        <h2 className="text-lg absolute bottom-6 left-1/2 text-gray-700 -translate-x-1/2">SOUPS</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-md' src={img4} alt="" />
                        <h2 className="text-lg absolute bottom-6 left-1/2 text-gray-700 -translate-x-1/2">DESERTS</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-md' src={img5} alt="" />
                        <h2 className="text-lg absolute bottom-6 left-1/2 text-gray-700 -translate-x-1/2">SALADS</h2>
                    </SwiperSlide>

                </Swiper>
            </article>
        </section>
    );
};

export default Categories;