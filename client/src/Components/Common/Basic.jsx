import React from 'react';
import {
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
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
      <Card>
        <CardBody className='dropdown-basic'>
          <Dropdown className='dropdown'>
            <Btn attrBtn={{ color: 'primary', className: 'dropbtn' }}>
              Limit{' '}
              <span>
                <i className='icofont icofont-arrow-down'></i>
              </span>
            </Btn>
            <DropdownMenu className='dropdown-content'>
              {props.items.map((item, i) => {
                return (
                  <DropdownItem
                    className=''
                    key={i}
                    onClick={() => handleLimit(item)}
                  >
                    {item}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;
