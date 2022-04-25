import { createSlice } from '@reduxjs/toolkit';
import {
  doUsers,
  usersPending,
  usersFulfilled,
  usersRejected,
} from '../actions/userActions';

const initialState = {
  users: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // users
    [doUsers.pending]: usersPending,
    [doUsers.fulfilled]: usersFulfilled,
    [doUsers.rejected]: usersRejected,
  },
});

export default userSlice.reducer;
