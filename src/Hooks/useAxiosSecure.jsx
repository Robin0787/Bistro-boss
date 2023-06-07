import axios from 'axios';
import { useContext, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/Provider';

const axiosSecure = axios.create({
    baseURL: `https://bistro-boss-server-jet-chi.vercel.app`
})

const useAxiosSecure = () => {
    const { logOutUser } = useContext(authContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('user-token');
            if (token) {
                config.headers.authorization = `bearer ${token}`;
            }
            return config;
        });
        axiosSecure.interceptors.response.use((response) => response, async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await logOutUser();
                toast.error('Session expired! login again');
                navigate('/login');
            }
            return Promise.reject(error);
        })
    }, [logOutUser, navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;