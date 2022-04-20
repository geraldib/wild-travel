import React, { Fragment, useState, useEffect, useCallback, useContext } from 'react';
import { Star } from 'react-feather';
import { Input } from 'reactstrap';
import { MENUITEMS } from '../../../Sidebar/Menu';
import { LI, UL } from '../../../../AbstractElements';
import ListOfMenu from './ListOfMenu';
import EmpltyClass from './EmptyClass';
import BackBtns from './BackBtn';
import CustomContext from '../../../../_helper/Customizer';
import RemoveBookmark from './RemoveBookmark';

const Bookmarks = () => {
    // eslint-disable-next-line
    const [mainMenu, setMainMenu] = useState(MENUITEMS);
    const [searchIcon, setSearchIcon] = useState(false);
    const { setIsClose } = useContext(CustomContext);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(false);// eslint-disable-next-line
    const [bookmarkSearch, SetBookmarkSearch] = useState(false);
    const [bookmarkItems, setBookmarkItems] = useState([]);
    const [bookmarkDropDown, setBookmarkDropDown] = useState(false);

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setSearchValue('');
            setSearchResult([]);
            SetBookmarkSearch(false);
            setIsClose(false);
        }// eslint-disable-next-line
    }, []);
    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);
        mainMenu.map(menuItems => {
            menuItems.Items.filter(items => {
                if (items.bookmark) {
                    setBookmarkItems(bookmarkItems => [...bookmarkItems, items]);
                }
                return items;
            });
            return menuItems;
        });
        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, [mainMenu, escFunction]);
    const addFix = () => {
        setIsClose(true);
    };
    const removeFix = useCallback(() => {
        setSearchValue('');
        setIsClose(false);
    }, [setIsClose]);
    const checkSearchResultEmpty = (items) => {
        if (!items.length) {
            setSearchIcon(true);
        } else {
            setSearchIcon(false);
        }
    };
    const handleSearchKeyword = (keyword) => {
        keyword ? addFix() : removeFix();
        const items = [];
        setSearchValue(keyword);
        mainMenu.map(menuItems => {
            menuItems.Items.filter(Items => {
                if (Items.title.toLowerCase().includes(keyword) && Items.type === 'link') {
                    items.push(Items);
                }
                if (!Items.children) return false;
                Items.children.filter(subItems => {
                    if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                        subItems.icon = Items.icon;
                        items.push(subItems);
                    }
                    if (!subItems.children) return false;
                    subItems.children.filter(suSubItems => {
                        if (suSubItems.title.toLowerCase().includes(keyword)) {
                            suSubItems.icon = Items.icon;
                            items.push(suSubItems);
                        }
                        return suSubItems;
                    });
                    return subItems;
                });
                setSearchResult(items);
                checkSearchResultEmpty(items);
                return Items;
            });
            return menuItems;
        });
    };
    const setCallbackBookmark = useCallback((valueAdd) => {
        setBookmarkItems(valueAdd);
    }, []);
    return (
        <Fragment>
            <LI attrLI={{ className: 'onhover-dropdown' }}>
                <div className="notification-box" onClick={() => setBookmarkDropDown(!bookmarkDropDown)}><Star /></div>
                <div className={`onhover-show-div bookmark-flip ${bookmarkDropDown ? 'active' : ''}`}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <RemoveBookmark bookmarkItems={bookmarkItems} />
                            <div className="back">
                                <UL>
                                    <LI>
                                        <div className="droplet-dropdown bookmark-dropdown flip-back-content">
                                            <Input type="text" placeholder="search..." value={searchValue}
                                                onChange={(e) => handleSearchKeyword(e.target.value)} />
                                            <ListOfMenu removeFix={removeFix} bookmarkItems={bookmarkItems} setCallbackBookmark={setCallbackBookmark} searchValue={searchValue} setBookmarkItems={setBookmarkItems} searchResult={searchResult} setSearchValue={setSearchValue}
                                                setSearchResult={setSearchResult} />
                                            <EmpltyClass searchIcon={searchIcon} />
                                        </div>
                                    </LI>
                                    <BackBtns />
                                </UL>
                            </div>
                        </div>
                    </div>
                </div>
            </LI>
        </Fragment>
    );
};

export default Bookmarks;