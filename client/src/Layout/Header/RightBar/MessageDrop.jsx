import React, { Fragment } from 'react';
import { MessageSquare } from 'react-feather';
import { Link } from 'react-router-dom';
import { Image, LI, P, UL } from '../../../AbstractElements';

const MessageDrop = () => {
    return (
        <Fragment>
            <LI attrLI={{ className: 'onhover-dropdown' }}>
                <MessageSquare />
                <UL attrUL={{ className: 'chat-dropdown onhover-show-div' }} >
                    <LI>
                        <div className="media">
                            <Image attrImage={{ className: 'img-fluid rounded-circle me-3', src: `${require('../../../assets/images/user/4.jpg')}`, alt: '' }} />
                            <Link to={`${process.env.PUBLIC_URL}/app/users/userProfile`}>
                                <div className="media-body"><span>Ain Chavez</span>
                                    <P attrPara={{ className: 'f-12 light-font' }} >Lorem Ipsum is simply dummy...</P>
                                </div>
                            </Link>
                            <P attrPara={{ className: 'f-12' }} >32 mins ago</P>
                        </div>
                    </LI>
                    <LI>
                        <div className="media">
                            <Image attrImage={{ className: 'img-fluid rounded-circle me-3', src: `${require('../../../assets/images/user/1.jpg')}`, alt: '' }} />
                            <Link to={`${process.env.PUBLIC_URL}/app/users/userProfile`}>
                                <div className="media-body"><span>Erica Hughes</span>
                                    <P attrPara={{ className: 'f-12 light-font' }} >Lorem Ipsum is simply dummy...</P>
                                </div>
                            </Link>
                            <P attrPara={{ className: 'f-12' }} >58 mins ago</P>
                        </div>
                    </LI>
                    <LI>
                        <div className="media">
                            <Image attrImage={{ className: 'img-fluid rounded-circle me-3', src: `${require('../../../assets/images/user/2.jpg')}`, alt: '' }} />
                            <Link to={`${process.env.PUBLIC_URL}/app/users/userProfile`}>
                                <div className="media-body"><span>Kori Thomas</span>
                                    <P attrPara={{ className: 'f-12 light-font' }} >Lorem Ipsum is simply dummy...</P>
                                </div>
                            </Link>
                            <P attrPara={{ className: 'f-12' }} >1 hr ago</P>
                        </div>
                    </LI>
                    <LI attrLI={{ className: 'text-center' }} >
                        <Link className="f-w-700" to={`${process.env.PUBLIC_URL}/app/chat-app`}>
                            See All</Link>
                    </LI>
                </UL>
            </LI>
        </Fragment>
    );
};

export default MessageDrop;