import React from 'react';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';

const ManageBookings = () => {
    return (
        <section className='bg-white min-h-screen'>
           <article className='text-black'>
            <SectionHeader subHeading={'Manage Bookings'} heading={'Manage All Bookings'} />
            </article>
        </section>
    );
};

export default ManageBookings;