import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTables from '../Components/Tables/DataTable';
import { doUsers } from '../store/actions/userActions';
import selectAllUsers from '../store/selectors/select-all-users';

const Users = () => {
  const usersData = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doUsers());
  }, [dispatch]);

  return (
    <div>
      {console.log(usersData)}
      <DataTables title='Users' users={usersData} />
    </div>
  );
};

export default Users;
