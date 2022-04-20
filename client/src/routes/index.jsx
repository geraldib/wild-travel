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

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={paths.landing} element={<Landing />} />
        <Route path='/' element={<AuthenticatedRoute />}>
          <Route path={paths.dashboard} element={<AppLayout />}>
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
