import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    return (
        <section className='bg-white min-h-screen'>
            <article className='text-black'>
                <SectionHeader subHeading={'User Payment'} heading={'Payment'} />
            </article>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </section>
    );
};

export default Payment;