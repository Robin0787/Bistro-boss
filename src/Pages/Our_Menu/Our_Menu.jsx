import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderTextOverImg from '../../Components/HeaderTextOverImg/HeaderTextOverImg';
import MenuItem from '../../Components/MenuItem/MenuItem';
import SectionButton from '../../Components/SectionButton/SectionButton';
import SectionCover from '../../Components/SectionCover/SectionCover';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import useMenu from '../../Hooks/useMenu';
import menusBanner from "../../assets/menu/banner3.jpg";
import desertsBanner from "../../assets/menu/dessert-bg.jpeg";
import pizzasBanner from "../../assets/menu/pizza-bg.jpg";
import saladsBanner from "../../assets/menu/salad-bg.jpg";
import soupsBanner from "../../assets/menu/soup-bg.jpg";
import LoadingSpinner from '../Shared/Loading/LoadingSpinner';

const Our_Menu = () => {
    const [menu, loading] = useMenu();
    const todaysOffer = menu.filter(item => item.category === 'offered');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const desserts = menu.filter(item => item.category === 'dessert');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');

    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <article className='mb-14 md:mb-20'>
                <HeaderTextOverImg img={menusBanner} subHeading={'would you like to try a dish?'} heading={'Our Menu'} fontSize={'5xl'} />
            </article>
            {/* Todays Offer Section */}
            <section className='mb-14 md:mb-20'>
            <article className='text-black'>
                <SectionHeader subHeading={"Don't miss"} heading={"Today's Offer"} />
            </article>
            <article className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-[80%] mx-auto'>
                {
                    loading ?
                        <LoadingSpinner />
                        :
                        todaysOffer.map((item) => <MenuItem key={item._id} item={item} />)
                }
            </article>
            <SectionButton text={'Order Your Favorite Food'}/>
            </section >
            {/* Pizzas Section */}
            <section className='mb-14 md:mb-20'>
                <article className='mb-14 md:mb-20'>
                    <SectionCover img={pizzasBanner} subHeading={'would you like to try a Pizza?'} heading={'Pizza'} fontSize={'5xl'} />
                </article>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-[80%] mx-auto'>
                {
                    loading ?
                        <LoadingSpinner />
                        :
                        pizzas.map((item) => <MenuItem key={item._id} item={item} />)
                }
            </article>
            <SectionButton text={'Order Your Favorite Pizza'}/>
            </section>
            {/* Deserts Section */}
            <section className='mb-14 md:mb-20'>
                <article className='mb-14 md:mb-20'>
                    <SectionCover img={desertsBanner} subHeading={'would you like to try a Dessert?'} heading={'Dessert'} fontSize={'5xl'} />
                </article>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-[80%] mx-auto'>
                {
                    loading ?
                        <LoadingSpinner />
                        :
                        desserts.map((item) => <MenuItem key={item._id} item={item} />)
                }
            </article>
            <SectionButton text={'Order Your Favorite Desert'}/>
            </section>
            {/* Salads Section */}
            <section className='mb-14 md:mb-20'>
                <article className='mb-14 md:mb-20'>
                    <SectionCover img={saladsBanner} subHeading={'would you like to try a Salad?'} heading={'Salads'} fontSize={'5xl'} />
                </article>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-[80%] mx-auto'>
                {
                    loading ?
                        <LoadingSpinner />
                        :
                        salads.map((item) => <MenuItem key={item._id} item={item} />)
                }
            </article>
            <SectionButton text={'Order Your Favorite Salad'}/>
            </section>
             {/* Soups Section */}
             <section className='mb-14 md:mb-20'>
                <article className='mb-14 md:mb-20'>
                    <SectionCover img={soupsBanner} subHeading={'would you like to try a Soup?'} heading={'Soups'} fontSize={'5xl'} />
                </article>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-[80%] mx-auto'>
                {
                    loading ?
                        <LoadingSpinner />
                        :
                        soups.map((item) => <MenuItem key={item._id} item={item} />)
                }
            </article>
            <SectionButton text={'Order Your Favorite Soup'}/>
            </section>
        </section>
    );
};

export default Our_Menu;