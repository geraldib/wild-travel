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
import {doAgencies} from '../../../store/actions/agencyActions';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

const DataTables = (props) => {
  const [data, setData] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

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

  const handlePrev = () => {
    dispatch(doAgencies({page: props.agencies?.prevPage}));
  };

  const handleNext = () => {
    dispatch(doAgencies({page: props.agencies?.nextPage}));
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
    dispatch(doAgencies({page: page}));
  };

  const paginationNumbers = useMemo(() => {
    const pagesTotal = props.agencies?.totalPages;
    const pageNum = pagesTotal >= 5 ? 5 : pagesTotal;
    const pages = [];

      for(let i = 1; i <= pageNum; i++) {
          pages.push(i);
      }
      return pages.map((item) => {
        return  (
            <li onClick={() => goToPage(item)} key={item} className={`page-item ${props.agencies?.page === item ? 'active' : ''}`}><button className="page-link">{item}</button></li>
        )
      })

  }, [props.agencies])

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
              <nav className="m-b-30" aria-label="Page navigation example">
                <nav className="pagination justify-content-center pagination-primary"
                     aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className={`page-item ${props.agencies?.hasPrevPage ? '' : 'disabled'}`}><button onClick={handlePrev} className="page-link">Previous</button></li>
                    {paginationNumbers}
                    <li className={`page-item ${props.agencies?.hasNextPage ? '' : 'disabled'}`}><button onClick={handleNext} className="page-link">Next</button></li>
                  </ul>
                </nav>
              </nav>
              {/*<div className="m-r-30 m-b-30 d-flex justify-content-center">*/}
              {/*  <div role="group" className="btn-group-pill btn-group">*/}
              {/*    <button onClick={()=>dispatch(doAgencies({page: props.agencies?.prevPage}))} className={`btn btn-outline-primary btn-xs btn-sm btn-lg ${props.agencies?.hasPrevPage ? '' : 'disabled'}`}>Prev</button>*/}
              {/*    <p className="btn btn-outline-primary btn-xs btn-sm btn-lg">{props.agencies?.page}</p>*/}
              {/*    <button onClick={()=>dispatch(doAgencies({page: props.agencies?.nextPage}))} className={`btn btn-outline-primary btn-xs btn-sm btn-lg ${props.agencies?.hasNextPage ? '' : 'disabled'}`}>Next</button>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DataTables;
