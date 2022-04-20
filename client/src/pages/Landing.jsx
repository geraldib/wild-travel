import React from 'react';
import { logout, reset } from '../features/auth/authSlice';
import {Btn} from "../AbstractElements";
import {Card} from "reactstrap";
import {LogOut} from "react-feather";
import {Link} from "react-router-dom";

const Landing = () => {

  return (
    <div>
      <h1>WELCOME TO WILD TRAVEL</h1>
        <Btn
            attrBtn={{
                as: Card.Header,
                className: 'btn btn-primary-light',
                color: 'default',
            }}
        >
            <Link to={'/login'}>
                Log IN
            </Link>
        </Btn>
        <Btn
            attrBtn={{
                as: Card.Header,
                className: 'btn btn-primary-light',
                color: 'default',
            }}
        >
            <Link to={'/register'}>
                Register
            </Link>
        </Btn>
    </div>
  );
};

export default Landing;
