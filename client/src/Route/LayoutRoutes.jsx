import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './Routes';
import AppLayout from '../Layout/Layout';

const LayoutRoutes = () => {

  return (
    <>
      <Routes>
        {routes.map(({ path, Component }, i) => (
          <Route element={<AppLayout />} key={i}>
            <Route path={'/'} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />} />
            <Route path={path} element={Component} />
          </Route>
        ))}
      </Routes>
    </>
  );
};

export default LayoutRoutes;