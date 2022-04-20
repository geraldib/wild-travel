import React from 'react';
import paths from './paths';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Default from '../Components/Dashboard/Default';
import AuthenticatedRoute from '../middleware/AuthenticatedRoute';
import Unathenticated from '../middleware/Unathenticated';
import AppLayout from '../Layout/Layout';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthenticatedRoute />}>
          <Route path='/' element={<AppLayout />}>
            <Route path={paths.dashboard} element={<Default />} />
          </Route>
        </Route>
        <Route path='/' element={<Unathenticated />}>
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.register} element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
