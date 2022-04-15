import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes/index';

function App() {
  return (
    <>
      <AllRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
