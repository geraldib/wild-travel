import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setLogin } from '../store/actions/authActions';
import Spinner from '../Components/Spinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message, isLoggedIn } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && isLoggedIn) {
      navigate('/dashboard');
    }
  }, [
    user,
    isError,
    isLoading,
    isSuccess,
    navigate,
    dispatch,
    message,
    isLoggedIn,
  ]);

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
    const userData = {
      email,
      password,
    };
    dispatch(setLogin(userData));
  };

  if (isLoading) {
    return <Spinner />;
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
