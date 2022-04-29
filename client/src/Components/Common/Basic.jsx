import React from 'react';
import { Card, CardBody, Col, Dropdown, DropdownMenu } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { useDispatch } from 'react-redux';
import { doAgencies } from '../../store/actions/agencyActions';

const Basic = (props) => {
  const dispatch = useDispatch();

  const handleLimit = (item) => {
    dispatch(doAgencies({ page: props.page, limit: item }));
    props.setLimit(item);
  };

  return (
    <Col sn='12' xl='12'>
      {/* <Card> */}
      <CardBody className='dropdown-basic p-b-0'>
        <Dropdown className='dropdown'>
          <Btn attrBtn={{ color: 'primary', className: 'dropbtn' }}>
            Limit : {props.limit ? props.limit : 10}
          </Btn>
          <DropdownMenu className='dropdown-content'>
            {props.items.map((item, i) => {
              return (
                <p
                  className='dropdown-item'
                  key={i}
                  onClick={() => handleLimit(item)}
                >
                  {item}
                </p>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </CardBody>
      {/* </Card> */}
    </Col>
  );
};

export default Basic;
