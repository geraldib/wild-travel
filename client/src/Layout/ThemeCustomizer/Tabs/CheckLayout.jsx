import React, { Fragment, useContext, useEffect } from 'react';
import { H6, Image, UL, LI } from '../../../AbstractElements';
import ConfigDB from '../../../Config/ThemeConfig';
import CustomizerContext from '../../../_helper/Customizer';

const CheckLayout = () => {
    const { addSidebarSettings } = useContext(CustomizerContext);
    const sidebarSettings = ConfigDB.data.sidebar_setting || localStorage.getItem('sidebar_Settings');

    useEffect(() => {
        ConfigDB.data.settings.sidebar_setting = sidebarSettings;
    }, []);

    const handleSttings = (sidebar_Settings) => {
        addSidebarSettings(sidebar_Settings);
    };

    return (
        <Fragment>
            <UL attrUL={{ className: 'sidebar-type layout-grid layout-types' }} >
                <LI attrLI={{ dataattr: 'defaul-layout' }} >
                    <div className="layout-img" onClick={() => handleSttings('')}>
                        <Image attrImage={{ className: 'img-fluid', src: `${require('../../../assets/images/landing/demo/1.jpg')}`, alt: '' }} />
                        <H6>Defaul layout</H6>
                    </div>
                </LI>
                <LI attrLI={{ dataattr: 'compact-layout' }} >
                    <div className="layout-img" onClick={() => handleSttings('compact-sidebar')}>
                        <Image attrImage={{ className: 'img-fluid', src: `${require('../../../assets/images/landing/demo/2.jpg')}`, alt: '' }} />
                        <H6>Compact layout</H6>
                    </div>
                </LI>
                <LI attrLI={{ dataattr: 'modern-layout' }}>
                    <div className="layout-img" onClick={() => handleSttings('modern-sidebar')}>
                        <Image attrImage={{ className: 'img-fluid', src: `${require('../../../assets/images/landing/demo/3.jpg')}`, alt: '' }} />
                        <H6>Modern layout</H6>
                    </div>
                </LI>
            </UL>
        </Fragment>
    );
};

export default CheckLayout;