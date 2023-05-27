import React from 'react';
import LoadingSpinner from '../../Pages/Shared/Loading/LoadingSpinner';
import ItemCard from '../ItemCard/ItemCard';

const Shop_Tab_Items = ({ tabItems, loading }) => {
    return (
        <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10'>
            {
                loading ?
                    <LoadingSpinner />
                    :
                    tabItems.map((item) => <ItemCard key={item._id} item={item} />)
            }
        </article>
    );
};

export default Shop_Tab_Items;