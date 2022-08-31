/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import useAuth from '../hooks/useAuth';

function PrivateRoute({ children, redirectTo }) {
  const { jwt } = useAuth(AuthContext);
  return jwt ? children : <Navigate to={redirectTo} />;
}
export default PrivateRoute;
