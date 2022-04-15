import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Unathenticated = () => {
  const isAuthenticated = localStorage.getItem('user');
  return !isAuthenticated ? <Outlet /> : <Navigate to='/dashboard' />;
};

export default Unathenticated;
