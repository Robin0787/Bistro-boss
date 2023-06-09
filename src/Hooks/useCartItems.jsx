import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { authContext } from '../AuthProvider/Provider';
import useAxiosSecure from './useAxiosSecure';



const useCartItems = () => {
    const { user, loading } = useContext(authContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart-items'],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure.get(`/cart-items?email=${user?.email}`)
                return res.data;
            }
        }
        // queryFn: async () => {
        //     const token = localStorage.getItem('user-token');
        //     const res = await fetch(`https://bistro-boss-server-jet-chi.vercel.app/cart-items?email=${user?.email}`, {
        //         method: "GET",
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     const data = await res.json();
        //     console.log(data);
        //     if (data.message) {
        //         toast.error(data.message, '! login again');
        //         logOutUser();
        //         navigate('/login');
        //         return [];
        //     }
        //     return data;
        // }
    })

    return [cart, refetch];
};

export default useCartItems;