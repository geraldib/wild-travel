import React from 'react';
import paths from './paths';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Landing from '../pages/Landing';
import Default from '../Components/Dashboard/Default';
import AuthenticatedRoute from '../middleware/AuthenticatedRoute';
import Unathenticated from '../middleware/Unathenticated';
import AppLayout from '../Layout/Layout';
import Users from '../pages/Users';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Unprotected */}
        <Route path={paths.landing} element={<Landing />} />
        {/* Authenticated */}
        <Route path='/' element={<AuthenticatedRoute />}>
          <Route path='/' element={<AppLayout />}>
            <Route path={paths.dashboard} element={<Default />} />
            <Route path={paths.users} element={<Users />} />
          </Route>
        </Route>
        {/* Unathenticated */}
        <Route path='/' element={<Unathenticated />}>
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.register} element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
