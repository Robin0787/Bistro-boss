import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router';
import LeftMenu from '../../Pages/LeftMenu/LeftMenu';

const DashboardRoute = () => {
    return (
        <>
        <Helmet>
            <title>Bistro Boss | Dashboard</title>
        </Helmet>
        <section className='flex relative'>
            <article className='w-[15%] sm:w-[10%] md:w-[25%] lg:w-1/5 xl:w-1/4 fixed top-0'>
                <LeftMenu /> 
            </article>
            <article className='w-[85%] sm:w-[90%] md:w-[75%] lg:w-4/5 xl:w-3/4  ml-14 sm:ml-20 md:ml-48 lg:ml-64 flex-grow z-10'>
                <Outlet />
            </article>
        </section>
        </>
    );
};

export default DashboardRoute;