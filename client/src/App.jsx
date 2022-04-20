import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes/index';
import AnimationThemeProvider from './_helper/AnimationTheme/AnimationThemeProvider';
import CustomizerProvider from './_helper/Customizer/CustomizerProvider';

const App = () => (
  <div className='App'>
    <CustomizerProvider>
      <AnimationThemeProvider>
        <AllRoutes />
        <ToastContainer />
      </AnimationThemeProvider>
    </CustomizerProvider>
  </div>
);

export default App;
