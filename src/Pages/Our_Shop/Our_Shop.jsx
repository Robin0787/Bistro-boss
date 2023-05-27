import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionCover from '../../Components/SectionCover/SectionCover';
import Shop_Tab_Items from '../../Components/Shop_Tab_Items/Shop_Tab_Items';
import useMenu from '../../Hooks/useMenu';
import shopsBanner from "../../assets/shop/banner2.jpg";


const Our_Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'desert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu, loading] = useMenu();
    const pizzas = menu.filter(item => item.category === 'pizza');
    const desserts = menu.filter(item => item.category === 'dessert');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <article className='mb-14 md:mb-20'>
                <SectionCover img={shopsBanner} subHeading={'Would you like to try a dish?'} heading={'Our Shop'} fontSize={'5xl'} />
            </article>
            <article className='text-center'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desert</Tab> 
                        <Tab>Drinks</Tab> 
                    </TabList>
                    <TabPanel>
                        <Shop_Tab_Items tabItems={salads} loading={loading} />
                    </TabPanel>
                    <TabPanel>
                        <Shop_Tab_Items tabItems={pizzas} loading={loading} />
                    </TabPanel>
                    <TabPanel>
                        <Shop_Tab_Items tabItems={soups} loading={loading} />
                    </TabPanel>
                    <TabPanel>
                        <Shop_Tab_Items tabItems={desserts} loading={loading} />
                    </TabPanel>
                    <TabPanel>
                        <Shop_Tab_Items tabItems={drinks} loading={loading} />
                    </TabPanel>
                </Tabs>
            </article>
        </section>
    );
};

export default Our_Shop;