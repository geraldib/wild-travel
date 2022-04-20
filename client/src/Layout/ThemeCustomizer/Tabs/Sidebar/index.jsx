import React, { Fragment } from 'react';
import SidebarType from './SidebarType';
import LayoutType from './LayoutType';
import AnimationFade from './AnimationFade';

const SidebarCusmizer = () => {

    return (
        <Fragment>
            <LayoutType />
            <SidebarType />
            <AnimationFade />
        </Fragment>
    );
};

export default SidebarCusmizer;