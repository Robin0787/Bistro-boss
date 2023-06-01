import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/Provider';
import useAxiosSecure from './useAxiosSecure';


const useCartItems = () => {
    const { user, loading } = useContext(authContext);
    const navigate = useNavigate();
    const [ axiosSecure ] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res =  await axiosSecure(`/cart-items?email=${user?.email}`)
            return res.data;
        }
        // queryFn: async () => {
        //     const token = localStorage.getItem('user-token');
        //     const res = await fetch(`http://localhost:1000/cart-items?email=${user?.email}`, {
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