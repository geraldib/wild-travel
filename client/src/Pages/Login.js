import React, { useCallback, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  };

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
