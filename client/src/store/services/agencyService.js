import axios from 'axios';

// const API_INDEX = `/api/agencies?page=1&limit=5`;
// Get All Agencies
const getAgencies = async (payload, thunkAPI) => {
  const currentPage = payload?.page ? payload.page : 1;
  const limit = payload?.limit ? payload.limit : 10;
  const API_INDEX = `/api/agencies?page=${currentPage}&limit=${limit}`;
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

const agencyService = {
  getAgencies,
};

export default agencyService;
