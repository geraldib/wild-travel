import React, { Fragment } from 'react';
import { Btn, LI } from '../../../../AbstractElements';
import { Back } from '../../../../Constant';

const BackBtns = () => {
    const backtobookmark = () => {
        document.querySelector('.flip-card-inner').classList.remove('flipped');
    };
    return (
        <Fragment>
            <LI>
                <Btn attrBtn={{ className: 'd-block flip-back', onClick: backtobookmark }}>{Back}</Btn>
            </LI>
        </Fragment>
    );
};
export default BackBtns;