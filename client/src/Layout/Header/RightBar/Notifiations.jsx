import React, { Fragment } from 'react';
import { Activity, Bell, CheckCircle, FileText, UserCheck } from 'react-feather';
import { Link } from 'react-router-dom';
import { LI, P, UL } from '../../../AbstractElements';

const Notifications = () => {
    return (
        <Fragment>
            <LI attrLI={{ className: 'onhover-dropdown' }} >
                <div className="notification-box">
                    <Bell />
                    <span className="dot-animated"></span></div>
                <UL attrUL={{ className: 'notification-dropdown onhover-show-div' }} >
                    <LI>
                        <P attrPara={{ className: 'f-w-700 m-0' }} >You have 3 Notifications<span className="pull-right badge badge-primary badge-pill">4</span></P>
                    </LI>
                    <LI attrLI={{ className: 'noti-primary' }} >
                        <Link to={`/app/email/mailbox`}>
                            <div className="media"><span className="notification-bg bg-light-primary">
                                <Activity />
                            </span>
                                <div className="media-body">
                                    <P>Delivery processing </P><span>10 minutes ago</span>
                                </div>
                            </div>
                        </Link>
                    </LI>
                    <LI attrLI={{ className: 'noti-secondary' }} >
                        <Link to={`${process.env.PUBLIC_URL}/app/email/mailbox`}>
                            <div className="media"><span className="notification-bg bg-light-secondary">
                                <CheckCircle />
                            </span>
                                <div className="media-body">
                                    <P>Order Complete</P><span>1 hour ago</span>
                                </div>
                            </div>
                        </Link>
                    </LI>
                    <LI attrLI={{ className: 'noti-success' }} >
                        <Link to={`${process.env.PUBLIC_URL}/app/email/mailbox`}>
                            <div className="media"><span className="notification-bg bg-light-success">
                                <FileText />
                            </span>
                                <div className="media-body">
                                    <P>Tickets Generated</P><span>3 hour ago</span>
                                </div>
                            </div>
                        </Link>
                    </LI>
                    <LI attrLI={{ className: 'noti-danger' }} >
                        <Link to={`${process.env.PUBLIC_URL}/app/email/mailbox`}>
                            <div className="media"><span className="notification-bg bg-light-danger">
                                <UserCheck />
                            </span>
                                <div className="media-body">
                                    <P>Delivery Complete</P><span>6 hour ago</span>
                                </div>
                            </div>
                        </Link>
                    </LI>
                </UL>
            </LI>
        </Fragment>
    );
};

export default Notifications;