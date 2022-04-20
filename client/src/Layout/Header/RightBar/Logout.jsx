import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'reactstrap';
import { Btn, LI } from '../../../AbstractElements';
import { firebase_app } from '../../../Config/Config';
import { LogOut } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../../../features/auth/authSlice';

const LogoutClass = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const history = useNavigate();
  const Logout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  return (
    <Fragment>
      <LI attrLI={{ className: 'onhover-dropdown p-0', onClick: Logout }}>
        <Btn
          attrBtn={{
            as: Card.Header,
            className: 'btn btn-primary-light',
            color: 'default',
          }}
        >
          <LogOut />
          Log out
        </Btn>
      </LI>
    </Fragment>
  );
};

export default LogoutClass;
