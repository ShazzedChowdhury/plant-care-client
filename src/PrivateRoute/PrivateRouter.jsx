import React, { use } from 'react';
import { AuthContext } from '../Contexts/Firebase/AuthProvider';
import LoadingSpiner from '../Components/Loader/LoadingSpiner';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
   const { loading, user } = use(AuthContext)
    const location = useLocation();
    console.log(location);

    if (loading) {
      return <LoadingSpiner />;
    }

    if (user) {
        return children  
    }    
    
    return <Navigate state={location?.pathname} to="/auth/log-in-form"></Navigate>;

};

export default PrivateRouter;