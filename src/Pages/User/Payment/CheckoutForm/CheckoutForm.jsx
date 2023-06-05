import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        if (!stripe || !Element) {
            toast.error('stripe/Element not found');
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            toast('Card is null');
            return;
        }
        console.log('card', card);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error){
            console.log(error);
            setCardError(error.message);
        } else {
            toast.success('Ok');
            setCardError('');
        }
    }
    return (
        <section className=' bg-gray-100 p-10'>
            <form onSubmit={handleSubmit} className='w-2/3 mx-auto bg-white p-10 text-center rounded-lg shadow-xl'>
                <CardElement
                    className='text-gray-700'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                border: '1px solid blue',
                                color: 'black',
                                '::placeholder': {
                                    color: '#000000a0',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline btn-primary px-10 my-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
                <>{cardError && <p className='text-sm text-red-600'>{cardError}</p>}</>
            </form>
        </section>
    );
};

export default CheckoutForm;