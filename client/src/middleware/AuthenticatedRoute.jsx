import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthenticatedRoute = () => {
  const { user } = useSelector((state) => state.auth);
  const isAuthenticated = user;
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default AuthenticatedRoute;
