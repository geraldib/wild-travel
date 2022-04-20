import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { Btn, LI } from '../../../../AbstractElements';
import { AddNewBookmark } from '../../../../Constant';

const BookmarkList = (props) => {
    const { bookmarkItems = '' } = props;
    const addnewbookmark = () => {
        document.querySelector('.flip-card-inner').classList.add('flipped');
    };

    return (
        <Fragment>
            <LI attrLI={{ className: 'custom-scrollbar' }}>
                <Row>
                    {bookmarkItems.map((items, index) => {
                        return (
                            <Col xs="4" className="text-center" key={index}>
                                <Link to={items.path || '/'}>
                                    <items.icon id={`${items[index]}`} />
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </LI>
            <LI attrLI={{ className: 'text-center' }}>
                <Btn attrBtn={{ className: 'flip-btn', onClick: addnewbookmark }}>{AddNewBookmark}</Btn>
            </LI>
        </Fragment>
    );
};
export default BookmarkList;