import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/Provider';
import LoadingSpinner from '../Pages/Shared/Loading/LoadingSpinner';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    
    if(loading) {
        return (
            <div className='pt-32 pb-10'>
                <LoadingSpinner />
            </div>
        )
    }
    else if(user) {
       return children
    }
    toast.success('Login First');
    return <Navigate to={'/login'} state={{from: location}} replace/>
};

export default PrivateRoutes;