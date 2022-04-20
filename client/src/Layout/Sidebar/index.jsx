import React, { Fragment, useEffect, useState, useContext } from 'react';
import SidebarMenu from './SidebarMenu';
import CustomizerContext from '../../_helper/Customizer';
import { MENUITEMS } from './Menu';
import Profile from './Profile';

const SideBarLayout = (props) => {
  const { toggleIcon } = useContext(CustomizerContext);
  const [currentUrl] = useState(window.location.pathname);
  const id = window.location.pathname.split('/').pop();
  // eslint-disable-next-line
  const [leftArrow, setLeftArrow] = useState(false);
  const layout = id;
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    setWidth(window.innerWidth - 500);
  }; // eslint-disable-next-line
  const [mainmenu, setMainMenu] = useState(MENUITEMS);
  const handleScroll = () => {
    if (window.scrollY > 400) {
      document.querySelector('.main-navbar').className = 'main-navbar hovered';
    } else {
      if (document.getElementById('main-navbar'))
        document.querySelector('.main-navbar').className = 'main-navbar';
    }
  };

  const setNavActive = (item) => {
    MENUITEMS.map((menuItems) => {
      menuItems.Items.filter((Items) => {
        if (Items !== item) {
          Items.active = false;
          document.getElementById('bg-overlay1').classList.remove('active');
        }
        if (Items.children && Items.children.includes(item)) {
          Items.active = true;
        }
        if (Items.children) {
          Items.children.filter((submenuItems) => {
            if (submenuItems.children && submenuItems.children.includes(item)) {
              Items.active = true;
              submenuItems.active = true;
              return true;
            } else {
              return false;
            }
          });
        }
        return Items;
      });
      return menuItems;
    });
    item.active = !item.active;
    setMainMenu({ mainmenu: MENUITEMS });
  };
  useEffect(() => {
    setLeftArrow(true);
    window.addEventListener('resize', handleResize);
    handleResize();
    const currentUrl = window.location.pathname;
    MENUITEMS.map((items) => {
      items.Items.filter((Items) => {
        if (Items.path === currentUrl) setNavActive(Items);
        if (!Items.children) return false;
        Items.children.filter((subItems) => {
          if (subItems.path === currentUrl) setNavActive(subItems);
          if (!subItems.children) return false;
          subItems.children.filter((subSubItems) => {
            if (subSubItems.path === currentUrl) {
              setNavActive(subSubItems);
              return true;
            } else {
              return false;
            }
          });
          return subItems;
        });
        return Items;
      });
      return items;
    });
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line
  }, [layout, currentUrl]);

  const closeOverlay = () => {
    document.getElementById('bg-overlay1').classList.remove('active');
    document.getElementById('nav-link').classList.remove('active');
  };

  return (
    <Fragment>
      <div
        id='bg-overlay1'
        onClick={() => {
          closeOverlay();
        }}
      ></div>
      <header className={`main-nav ${toggleIcon ? 'close_icon' : ''}`}>
        <Profile />
        <SidebarMenu
          setMainMenu={setMainMenu}
          props={props}
          sidebartoogle={true}
          setNavActive={setNavActive}
          width={width}
        />
      </header>
    </Fragment>
  );
};
export default SideBarLayout;
