import { Home, Anchor, Headphones } from 'react-feather';

export const MENUITEMS = [
    {
        menutitle: 'General',
        menucontent: 'Dashboards,Widgets',
        Items: [
            {
                title: 'Dashboard', icon: Home, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, title: 'Ecommerce', type: 'link' },
                ]
            }
        ]

    },
    {
        menutitle: 'Starter',
        menucontent: 'Ready to use Apps',
        Items: [
            {
                title: 'Starter kit', icon: Anchor, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/starter-kits/sample-page`, title: 'Sample Page', type: 'link' },
                ]
            }
        ]
    },
    {
        menutitle: 'Support',
        menucontent: '',
        Items: [
            {
                title: 'Raise Support', icon: Headphones, type: 'sub', active: false, children: [
                    { title: 'Raise Ticket', type: 'exteral_link', path: 'http://support.pixelstrap.com/help-center' },
                ]
            }
        ]
    },


]