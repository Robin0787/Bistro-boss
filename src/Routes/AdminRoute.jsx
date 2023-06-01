import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/Provider';
import useCheckAdmin from '../Hooks/useCheckAdmin';
import LoadingSpinner from "../Pages/Shared/Loading/LoadingSpinner";

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const [isAdmin, isAdminLoading] = useCheckAdmin();
    const location = useLocation();
    
    if(loading || isAdminLoading) {
        return (
            <div className='pt-32 pb-10'>
                <LoadingSpinner />
            </div>
        )
    }
    if(user && isAdmin) {
       return children;
    }
    toast.success('Login First');
    return <Navigate to={'/login'} state={{from: location}} replace/>
};

export default AdminRoute;