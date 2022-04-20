import Loader from './Loader';
import Taptop from './TapTop';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import React, { Fragment } from 'react';
import ThemeCustomize from '../Layout/ThemeCustomizer';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import CheckContext from '../_helper/Customizer';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AnimationThemeContext from '../_helper/AnimationTheme';
import ConfigDB from '../Config/ThemeConfig';

const AppLayout = ({ children,
  classNames,
  ...rest }) => {
  const { sidebar_types, settings } = useContext(CheckContext);
  const settings1 = localStorage.getItem('sidebar_Settings') || settings;
  const sidebar_types1 = localStorage.getItem('sidebar_types') || sidebar_types;
  const location = useLocation();
  const { animation } = useContext(AnimationThemeContext);
  const animationTheme =
    localStorage.getItem('animation') ||
    animation || ConfigDB.data.router_animation;

  return (
    <Fragment>
      <Loader />
      <Taptop />
      <div className={`page-wrapper ${sidebar_types1} ${settings1}`} id="pageWrapper">
        <Header />
        <div className="page-body-wrapper horizontal-menu">
          <Sidebar />
          <TransitionGroup {...rest}>
            <CSSTransition
              key={location.key}
              timeout={100}
              classNames={animationTheme}
              unmountOnExit
            >
              <div className="page-body">
                <Outlet />
              </div>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div>
      </div>
      <ThemeCustomize />
      <ToastContainer />
    </Fragment>
  );
};
export default AppLayout;