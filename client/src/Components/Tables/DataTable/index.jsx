import React, {
  Fragment,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import { useDispatch } from 'react-redux';
import { doAgencies } from '../../../store/actions/agencyActions';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import { Pagination } from '../../Common/Pagination';
import Basic from '../../Common/Basic';

const DataTables = (props) => {
  const [limit, setLimit] = useState('');
  const [data, setData] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [active, setActive] = React.useState(props?.agencies?.page || 1);

  const dispatch = useDispatch();

  const tableColumns = [
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
      center: true,
    },
    {
      name: 'Surname',
      selector: (row) => row.surname,
      sortable: true,
      center: true,
    },
    {
      name: 'Phone',
      selector: (row) => row.phone,
      sortable: true,
      center: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
      center: true,
    },
  ];
  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const activeHandler = useCallback((clickedActive) => {
    setActive(parseInt(clickedActive));
  }, []);

  const handlePrev = () => {
    dispatch(doAgencies({ page: props.agencies?.prevPage, limit: limit }));
  };

  const handleNext = () => {
    dispatch(doAgencies({ page: props.agencies?.nextPage, limit: limit }));
  };

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.name
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, 'name'));
        toast.success('Successfully Deleted !');
      }
    };

    return (
      <button key='delete' className='btn btn-danger' onClick={handleDelete}>
        Delete
      </button>
    );
  }, [data, selectedRows, toggleCleared]);

  useEffect(() => {
    setData(props.agencies?.docs);
  }, [props.agencies]);

  const goToPage = (page) => {
    dispatch(doAgencies({ page: page, limit: limit }));
  };

  return (
    <Fragment>
      <Breadcrumbs parent='Table' title={props.title} mainTitle={props.title} />
      <Container fluid={true} className='datatables'>
        <Row>
          <Col sm='12'>
            <Card>
              <Basic
                limit={limit}
                page={props?.agencies?.page}
                setLimit={setLimit}
                items={[5, 10, 20, 50]}
              />
              <CardBody>
                <DataTable
                  data={data}
                  columns={tableColumns}
                  striped={true}
                  center={true}
                  selectableRows
                  persistTableHead
                  contextActions={contextActions}
                  onSelectedRowsChange={handleRowSelected}
                  clearSelectedRows={toggleCleared}
                />
              </CardBody>
              <Pagination
                active={active}
                size={props?.agencies?.totalPages}
                step={2}
                onClickHandler={activeHandler}
                onNext={handleNext}
                onPrev={handlePrev}
                onPage={goToPage}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DataTables;
