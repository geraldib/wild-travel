import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../AbstractElements';
import logo from '../../assets/images/logo/logo.png';

const SidebarLogo = () => {

  return (
    <div className="logo-icon-wrapper">
      <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
        <Image
          attrImage={{ className: 'img-fluid for-dark', src: `${logo}`, alt: '' }} />
      </Link>
    </div>
  );
};

export default SidebarLogo;