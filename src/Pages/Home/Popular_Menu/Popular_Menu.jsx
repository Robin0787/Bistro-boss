import React, { useEffect, useState } from 'react';
import MenuItem from '../../../Components/MenuItem/MenuItem';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';

const Popular_Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenus = data.filter((item) => item.category === 'popular');
            setMenu(popularMenus);
        })
    }, [])
    return (
        <section className='mb-14 lg:mb-20'>
                <article className='text-black'>
                    <SectionHeader subHeading={'Check it Out'} heading={'From Our Menu'}/>
                </article>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    {
                        menu.map(item => <MenuItem key={item._id} item={item}/>)
                    }
                </article>
        </section>  
    );
};

export default Popular_Menu;