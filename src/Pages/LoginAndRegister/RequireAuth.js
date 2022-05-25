
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import Spinner from '../Shared/Spinner';


const RequireAuth = ({ children }) => {
    const [user, Loading] = useAuthState(auth)
    const location = useLocation()
    if (Loading) {
        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;