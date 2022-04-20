// dashbaord
import Default from '../Components/Dashboard/Default';
import Ecommerce from '../Components/Dashboard/Ecommerce';

import SupportTickitContain from '../Components/SupportTicket';

export const routes = [
        //dashboard
        { path: `${process.env.PUBLIC_URL}/dashboard/default`, Component: <Default /> },
        { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, Component: <Ecommerce /> },

        //Support Ticket
        { path: `${process.env.PUBLIC_URL}/starter-kits/sample-page`, Component: <SupportTickitContain /> }

];
