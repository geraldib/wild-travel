import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTables from '../Components/Tables/DataTable';
import {doAgencies} from '../store/actions/agencyActions';
import selectAllAgencies from '../store/selectors/select-all-agencies';

const Agencies = () => {
  const agenciesData = useSelector(selectAllAgencies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doAgencies());
  }, [dispatch]);

  return (
    <div>
      <DataTables title='Users' agencies={agenciesData} />
    </div>
  );
};

export default Agencies;
