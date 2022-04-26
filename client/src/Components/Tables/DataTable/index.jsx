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
// import { tableData } from '../../../Data/DummyTableData';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

const DataTables = (props) => {
  const [data, setData] = useState(props.users);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

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
    setData(props.users);
  }, [props.users]);

  return (
    <Fragment>
      <Breadcrumbs parent='Table' title={props.title} mainTitle={props.title} />
      <Container fluid={true} className='datatables'>
        <Row>
          <Col sm='12'>
            <Card>
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
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DataTables;
