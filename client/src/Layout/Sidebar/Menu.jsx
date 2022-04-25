import { Home, Anchor, Headphones, User } from 'react-feather';

export const MENUITEMS = [
  {
    menutitle: 'General',
    menucontent: 'Dashboards,Widgets',
    Items: [
      {
        title: 'Dashboard',
        icon: Home,
        type: 'link',
        active: true,
        path: '/dashboard',
      },
      {
        title: 'Users',
        icon: User,
        type: 'link',
        active: false,
        path: '/api/users',
      },
    ],
  },
  {
    menutitle: 'Starter',
    menucontent: 'Ready to use Apps',
    Items: [
      {
        title: 'Starter kit',
        icon: Anchor,
        type: 'sub',
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/starter-kits/sample-page`,
            title: 'Sample Page',
            type: 'link',
          },
        ],
      },
    ],
  },
  {
    menutitle: 'Support',
    menucontent: '',
    Items: [
      {
        title: 'Raise Support',
        icon: Headphones,
        type: 'sub',
        active: false,
        children: [
          {
            title: 'Raise Ticket',
            type: 'exteral_link',
            path: 'http://support.pixelstrap.com/help-center',
          },
        ],
      },
    ],
  },
];
