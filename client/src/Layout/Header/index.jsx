import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react';
import { MoreHorizontal } from 'react-feather';
import Leftbar from './LeftBar';
import Rightbar from './RightBar';
import Searchbar from './Search';
import { Row } from 'reactstrap';
import { useContext } from 'react';
import CustomizerContext from '../../_helper/Customizer';

const Header = () => {
  const [sidebartoogle, setSidebartoogle] = useState(true);
  const { toggleIcon, toggleSidebarResponsive, toggleSidebar } =
    useContext(CustomizerContext);
  const [toggle, setToggle] = useState(true);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        if (window.innerWidth <= 991) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  // eslint-disable-next-line
  const [width] = useWindowSize();

  useEffect(() => {
    if (window.innerWidth <= 991) {
      toggleSidebar(true);
    } else {
      toggleSidebar(false);
    }
  }, [toggle]);

  const toggleResp = (value) => {
    setToggle(value);
    toggleSidebarResponsive(toggle);
  };

  return (
    <Fragment>
      <div className={`page-main-header ${toggleIcon ? 'close_icon' : ''}`}>
        <Row className='main-header-right m-0'>
          <Leftbar
            sidebartoogle={sidebartoogle}
            setSidebartoogle={setSidebartoogle}
          />
          <Searchbar />
          <Rightbar />
          <div
            className='d-lg-none mobile-toggle pull-right w-auto'
            onClick={() => toggleResp(!toggle)}
          >
            <MoreHorizontal />
          </div>
        </Row>
      </div>
    </Fragment>
  );
};

export default Header;
