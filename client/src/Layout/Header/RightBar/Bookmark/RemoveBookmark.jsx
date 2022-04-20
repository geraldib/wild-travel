import React, { Fragment } from 'react';
import { H6, LI, UL } from '../../../../AbstractElements';
import { Bookmark } from '../../../../Constant';
import BookmarkList from './BookmarkList';

const RemoveBookmark = ({ bookmarkItems }) => {
    return (
        <Fragment>
            <div className="front">
                <UL attrUL={{ className: 'simple-list droplet-dropdown bookmark-dropdown' }}>
                    <LI attrLI={{ className: 'p-0' }}>
                        <H6 attrH6={{ className: 'f-18 mb-0' }}>{Bookmark}</H6>
                    </LI>
                    <BookmarkList bookmarkItems={bookmarkItems} />
                </UL>
            </div>
        </Fragment>
    );
};
export default RemoveBookmark;