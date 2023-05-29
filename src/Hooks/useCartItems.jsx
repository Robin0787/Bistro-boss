import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { authContext } from '../AuthProvider/Provider';


const useCartItems = () => {
    const { user } = useContext(authContext);

    const {refetch, data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:1000/cart-items?email=${user?.email}`)
            return res.json();
        }
    })

    return [cart, refetch];
};

export default useCartItems;