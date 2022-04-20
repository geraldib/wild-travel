import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import H3 from '../Headings/H3Element';

const Breadcrumbs = (props) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-header">
          <Row>
            <Col sm="6">
              <H3>{props.mainTitle}</H3>
            </Col>
            <Col sm="6">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>Home</Link></li>
                <li className="breadcrumb-item">{props.parent}</li>
                {props.subParent ? <li className="breadcrumb-item">{props.subParent}</li> : ''}
                <li className="breadcrumb-item active">{props.title}</li>
              </ol>
            </Col>

          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Breadcrumbs;