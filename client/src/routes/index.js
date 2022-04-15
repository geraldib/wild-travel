import React from 'react';
import paths from './paths.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import AuthenticatedRoute from '../middleware/AuthenticatedRoute.js';
import Unathenticated from '../middleware/Unathenticated.js';

const AllRoutes = () => {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<AuthenticatedRoute />}>
            <Route path={paths.dashboard} element={<Dashboard />} />
          </Route>
          <Route path='/' element={<Unathenticated />}>
            <Route path={paths.login} element={<Login />} />
            <Route path={paths.register} element={<Register />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default AllRoutes;
