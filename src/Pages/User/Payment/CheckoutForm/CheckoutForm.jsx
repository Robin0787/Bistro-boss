import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../../../AuthProvider/Provider';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const CheckoutForm = ({ totalPrice, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useContext(authContext);
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log('Inside useEffect');
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(result => {
                    const data = result.data;
                    setClientSecret(data.clientSecret);
                })
        } else {
            toast.error('Please Order Something!');
            navigate('/our-shop/salad');
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        setPaymentLoading(true);
        if (!stripe || !elements) {
            toast.error('Stripe/Element not found');
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            toast('Card is null');
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log(error);
            setCardError(error.message);
            toast.error(error.message);
            setPaymentLoading(false);
            return;
        } else {
            setCardError('');
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'Anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        )
        if (confirmError) {
            toast(confirmError.message);
            setCardError(confirmError.message);
            console.log(confirmError);
            return;
        }
        if (paymentIntent?.status === 'succeeded') {
            setPaymentLoading(false);
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                totalPrice,
                quantity: cart.length,
                itemsName: cart.map(item => item.name),
                cartItemsId: cart.map(item => item._id),
                menuItemsId: cart.map(item => item.menuId),
                status: 'pending'
            }
            axiosSecure.post('/payments', { payment })
                .then(res => {
                    if (res.data.insertResult.insertedId) {
                        toast.success('Payment Succeeded');
                        navigate('/');
                    }
                })
        }
    }
    return (
        <section className=' bg-gray-100 p-5 md:p-10'>
            <form onSubmit={handleSubmit} className='md:w-2/3 mx-auto bg-white p-5 md:p-10 text-center rounded-lg shadow-xl'>
                <h1 className="text-2xl font-semibold text-black text-left pb-6"> Total Price: ${totalPrice}</h1>
                <CardElement
                    className='text-gray-700 border-2 p-5 border-indigo-500 rounded-lg'
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
                <button className={`btn btn-outline btn-primary px-10 my-5 ${paymentLoading ? 'cursor-progress' : 'cursor-pointer'}`} type="submit" disabled={!stripe || !clientSecret || paymentLoading}>
                    {
                        paymentLoading ?
                            <ImSpinner9 className='animate-spin duration-300 text-black' /> : "Pay"
                    }
                </button>
                <>{cardError && <p className='text-sm text-red-600'>{cardError}</p>}</>
            </form>
        </section>
    );
};

export default CheckoutForm;