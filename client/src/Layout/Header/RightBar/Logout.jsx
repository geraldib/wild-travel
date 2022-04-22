import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'reactstrap';
import { Btn, LI } from '../../../AbstractElements';
import { firebase_app } from '../../../Config/Config';
import { LogOut } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../../store/slices/authSlice';
import { useCallback } from 'react';

const LogoutClass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = useCallback(() => {
    dispatch(logout());
    navigate('/');
  }, [dispatch]);

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
