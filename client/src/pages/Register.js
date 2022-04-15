import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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

  const handleName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [setName]
  );

  const handleSurname = useCallback(
    (e) => {
      setSurname(e.target.value);
    },
    [setSurname]
  );

  const handleEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  const handlePhone = useCallback(
    (e) => {
      setPhone(e.target.value);
    },
    [setPhone]
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
      name,
      surname,
      email,
      phone,
      password,
    };

    dispatch(register(userData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={handleName}
        />
        <br />
        <input
          type='text'
          placeholder='Surname'
          value={surname}
          onChange={handleSurname}
        />
        <br />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={handleEmail}
        />
        <br />
        <input
          type='number'
          placeholder='Phone'
          value={phone}
          onChange={handlePhone}
        />
        <br />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePassword}
        />
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;