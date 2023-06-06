import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import useCartItems from '../../../Hooks/useCartItems';
import CheckoutForm from './CheckoutForm/CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    const [cart] = useCartItems();
    const totalPrice = cart.reduce((prevValue, item) => prevValue + item.price, 0);
    const price = parseFloat(totalPrice.toFixed(2));
    return (
        <section className='bg-white min-h-screen'>
            <article className='text-black'>
                <SectionHeader subHeading={'User Payment'} heading={'Payment'} />
            </article>
            <Elements stripe={stripePromise}>
                <CheckoutForm totalPrice={price} cart={cart} />
            </Elements>
        </section>
    );
};

export default Payment;