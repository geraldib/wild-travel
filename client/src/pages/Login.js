import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {login, reset} from "../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isLoading, isSuccess, navigate, dispatch]);


  const handleEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  const handlePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const usedData = {
      email,
      password
    }
    dispatch(login(usedData));
  };

  if(isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={handleEmail}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePassword}
        />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
