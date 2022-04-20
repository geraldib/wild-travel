import React, { Fragment, useState, useContext } from 'react';
import { LI } from '../../../AbstractElements';
import CustomizerContext from '../../../_helper/Customizer';

const MoonLight = () => {
    const { addMixBackgroundLayout } = useContext(CustomizerContext);
    const [moonlight, setMoonlight] = useState(false);

    const MoonlightToggle = (light) => {
        if (light) {
            addMixBackgroundLayout('light-only');
            document.body.className = 'light-only';
            setMoonlight(!light);
        } else {
            addMixBackgroundLayout('dark-only');
            document.body.className = 'dark-only';
            setMoonlight(!light);
        }
    };
    return (
        <Fragment>
            <LI>
                <div className="mode" onClick={() => MoonlightToggle(moonlight)} >
                    {moonlight ? <i className="fa fa-lightbulb-o"></i> : <i className="fa fa-moon-o"></i>}
                </div>
            </LI>
        </Fragment>
    );
};

export default MoonLight;