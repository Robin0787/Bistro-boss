import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { authContext } from '../AuthProvider/Provider';
import useAxiosSecure from './useAxiosSecure';

const useCheckAdmin = () => {
    const {user} = useContext(authContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useCheckAdmin;