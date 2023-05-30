import React from 'react';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';

const AddItems = () => {
    return (
        <section className='bg-white min-h-screen'>
           <article className='text-black'>
            <SectionHeader subHeading={'Add Items'} heading={'Add An Item'} />
            </article>
        </section>
    );
};

export default AddItems;