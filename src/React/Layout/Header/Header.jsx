import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { useMediaQuery } from 'React/common/useMediaQuery.js';

/* Context ---------------------------*/
import Context from './Context/index.js';
import reducer from './Context/reducer.js';
import { updateIsSmall } from './Context/actions.js';

/* Components ---------------------------*/
import MediaQuery from './MediaQuery/MediaQuery.jsx';

const Header = () => {

    const { media: { mdUp } } = useMediaQuery();

    const defaultState = {
        showMobileMenu: false,
        isSmall: false,
    };

    const [ state, dispatch ] = useReducer(reducer, defaultState);

    useEffect(() => {
        dispatch(updateIsSmall(!mdUp));
    }, [mdUp]);

    return (
        <Context.Provider value={ { state, dispatch } } displayName='Header'>
            <HeaderStyled className='Header'>
                <MediaQuery />
            </HeaderStyled>
        </Context.Provider>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: rgb(1, 68, 68);
    color: white;
`;