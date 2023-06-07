import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
// Import Swiper React components
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";
// import ratting element
import { Rating } from '@smastrom/react-rating';
// rating css
import '@smastrom/react-rating/style.css';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-server-jet-chi.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <section>
            <article className='text-black'>
                <SectionHeader subHeading={'What Our Clients Say'} heading={'Testimonials'} />
            </article>
            <article className=''>
                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map((review) => <SwiperSlide key={review._id}>
                            <div className='text-center m-10'>
                                <div className='flex justify-center items-center'>
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={review.rating}
                                    readOnly
                                />
                                </div>
                                <div className='flex justify-center my-5'>
                                    <FaQuoteLeft className='h-16 w-16 text-black'/>
                                </div>
                                <p className='w-[90%] text-center mx-auto text-gray-600 mb-2'>{review.details}</p>
                                <h2 className="text-2xl text-yellow-600">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </article>
        </section>
    );
};

export default Testimonial;