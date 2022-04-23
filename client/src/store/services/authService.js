import axios from 'axios';

const API_URL = '/api/auth/register';
const LOGIN_API_URL = '/api/auth/login';

// Register user
const register = async (payload, thunkAPI) => {
  try {
    const response = await axios.post(API_URL, payload);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
};

// Login user
const login = async (payload, thunkAPI) => {
  try {
    const response = await axios.post(LOGIN_API_URL, payload);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
};

const authService = {
  register,
  login,
};

export default authService;
