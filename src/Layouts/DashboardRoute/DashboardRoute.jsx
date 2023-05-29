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
            <article className='w-1/5 fixed top-0'>
                <LeftMenu /> 
            </article>
            <article className='w-4/5 ml-20 md:ml-40 lg:ml-64'>
                <Outlet />
            </article>
        </section>
        </>
    );
};

export default DashboardRoute;