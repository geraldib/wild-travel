import React, { Fragment, useState, useEffect, useCallback, useContext } from 'react';
import { Col, Form, Input } from 'reactstrap';
import { MENUITEMS } from '../../Sidebar/Menu';
import { LI, UL } from '../../../AbstractElements';
import EmpltyClass from '../RightBar/Bookmark/EmptyClass';
import CustomizerContext from '../../../_helper/Customizer';
import ListOfMenu from '../RightBar/Bookmark/ListOfMenu';

const Searchbar = () => {
    const mainmenu = MENUITEMS;
    const [searchValue, setSearchValue] = useState('');
    const [openResp, setOpenResp] = useState(false);
    const [searchIcon, setSearchIcon] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const [searchToggle, setSearchToggle] = useState(false);
    const { setIsClose } = useContext(CustomizerContext);
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            //Do whatever when esc is pressed
            setSearchValue('');
            setSearchResult([]);
            setIsClose(false);
        }
    }, [setIsClose]);

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);
        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, [escFunction, searchValue]);

    const checkSearchResultEmpty = (items) => {
        if (!items.length) {
            setSearchIcon(true);
        } else {
            setSearchIcon(false);
        }
    };

    const addFix = () => {
        setSearchToggle(true);
    };

    const removeFix = useCallback(() => {
        setSearchValue('');
        setSearchToggle(false);
        setIsClose(false);
    }, [setIsClose]);

    const handleSearchKeyword = (keyword) => {
        keyword ? addFix() : removeFix();
        const items = [];
        setSearchValue(keyword);
        mainmenu.map(menuItems => {
            menuItems.Items.filter(mItems => {
                if (mItems.title.toLowerCase().includes(keyword) && mItems.type === 'link') {
                    items.push(mItems);
                }
                if (!mItems.children) return false;
                mItems.children.filter(subItems => {
                    if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                        subItems.icon = mItems.icon;
                        items.push(subItems);
                    }
                    if (!subItems.children) return false;
                    subItems.children.filter(suSubItems => {
                        if (suSubItems.title.toLowerCase().includes(keyword)) {
                            suSubItems.icon = mItems.icon;
                            items.push(suSubItems);
                        }
                        return suSubItems;
                    });
                    return subItems;
                });

                checkSearchResultEmpty(items);
                setSearchResult(items);
                return mItems;
            });
            return menuItems;
        });
    };

    const openSearch = () => {
        setOpenResp(!openResp);
        if (openResp === true) {
            setSearchToggle(false);
        }
    };

    return (
        <Fragment>
            <Col className="left-menu-header">
                <UL attrUL={{ className: 'simple-list' }}>
                    <LI>
                        <Form className="form-inline search-full" action="#" method="get">
                            <div className="form-group w-100">
                                <div className="Typeahead Typeahead--twitterUsers">
                                    <div className="search-bg" >
                                        <i className="fa fa-search" onClick={() => openSearch()}></i>
                                        <Input className={`form-control-plaintext searchIcon ${openResp ? 'open' : ''}`} type="text" placeholder="Search here" defaultValue={searchValue} onChange={(e) => handleSearchKeyword(e.target.value)} />
                                    </div>
                                    <ListOfMenu searchValue={searchValue} searchResult={searchResult} removeFix={removeFix} searchBar={true} searchToggle={searchToggle} />
                                    <EmpltyClass searchIcon={searchIcon} search={true} />
                                </div>
                            </div>
                        </Form>
                    </LI>
                </UL>
            </Col>
        </Fragment >
    );
};

export default Searchbar;