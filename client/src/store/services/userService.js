import axios from 'axios';
const API_INDEX = '/api/users';

// Get All Users
const getUsers = async (thunkAPI) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { authorization: user.token },
    };
    const response = await axios.get(API_INDEX, config);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
};

const userService = {
  getUsers,
};

export default userService;
