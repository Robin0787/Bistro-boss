import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import logo from "../../assets/logo.png";
const Footer = () => {
    return (
        <section className='bg-black text-gray-200 py-24 mt-20 lg:mt-28 mx-auto'>
            <article className='w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 '>
                <div className='space-y-5'>
                    <div className='flex items-center gap-5'>
                        {/* <img src={logo} alt="" className='h-12 w-12 bg-white p-2 rounded-full' /> */}
                        <h2 className="text-2xl font-bold">Bistro Boss</h2>
                    </div>
                    <p className="text-md text-justify text-gray-400 w-[70%]">Step into a world of adventure and imagination with our captivating collection of animal-inspired toys..</p>
                    <div className='flex items-center justify-start gap-4'>
                        <a target='_blank' href='https://github.com/Robin0787' className='bg-gray-100 hover:bg-gray-500 hover:text-white  duration-300 p-2 cursor-pointer rounded-full text-gray-800'><FaGithub className='h-5 w-5 hover:scale-110 duration-300' /></a>
                        <a target='_blank' href='https://web.facebook.com/robin0787' className='bg-gray-100 hover:bg-gray-500 hover:text-white duration-300 p-2 cursor-pointer rounded-full text-blue-500'><FaFacebook className='h-5 w-5 hover:scale-110 duration-300' /></a>
                        <a target='_blank' href='https://www.linkedin.com/in/robin0787/' className='bg-gray-100 hover:bg-gray-500 hover:text-white duration-300 p-2 cursor-pointer rounded-full text-blue-500'><FaLinkedinIn className='h-5 w-5 hover:scale-110 duration-300' /></a>
                        <a target='_blank' href='https://twitter.com/Mohamma19904459' className='bg-gray-100 hover:bg-gray-500 hover:text-white duration-300 p-2 cursor-pointer rounded-full text-blue-500'><FaTwitter className='h-5 w-5 hover:scale-110 duration-300' /></a>
                    </div>
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Company</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Product</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Support</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Contact</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>mohammadrobin636@gmail.com</li>
                        <li>+880 17996 18056</li>
                        <li>Brahmanbaria, Dhaka, Bangladesh</li>
                    </ul>
                </div>
            </article>
            <hr className='border-gray-800 my-10 w-[90%] mx-auto' />
            <div className='w-[90%] mx-auto flex justify-between items-center text-sm text-gray-400'>
                <p>@2023 Bistro Boss. All Rights Reserved</p>
                <p>Powered by Bistro Boss</p>
            </div>
        </section>
    );
};

export default Footer;