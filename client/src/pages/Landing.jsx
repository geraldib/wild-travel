import React from 'react';
import { Btn } from '../AbstractElements';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectLoggedUser from '../store/selectors/select-user-data';

const Landing = () => {
  const isLoggedIn = useSelector(selectLoggedUser);

  return (
    <div>
      <h1>WELCOME TO WILD TRAVEL</h1>
      {!isLoggedIn ? (
        <>
          <Btn
            attrBtn={{
              as: Card.Header,
              className: 'btn btn-primary-light',
              color: 'default',
            }}
          >
            <Link to={'/login'}>Log IN</Link>
          </Btn>
          <Btn
            attrBtn={{
              as: Card.Header,
              className: 'btn btn-primary-light',
              color: 'default',
            }}
          >
            <Link to={'/register'}>Register</Link>
          </Btn>{' '}
        </>
      ) : (
        <Btn
          attrBtn={{
            as: Card.Header,
            className: 'btn btn-primary-light',
            color: 'default',
          }}
        >
          <Link to={'/dashboard'}>Go To Dashboard</Link>
        </Btn>
      )}
    </div>
  );
};

export default Landing;
