import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if(!user) {
      navigate('/login');
    }
  }, [user, navigate])
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/register');
  };

  return (
    <div>
      <h1>You are in</h1>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
