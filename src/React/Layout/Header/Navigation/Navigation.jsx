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

const Navigation = () => {

    const { media: { mdUp } } = useMediaQuery();

    const defaultState = {
        showMenu: false,
        isSmall: false,
    };

    const [ state, dispatch ] = useReducer(reducer, defaultState);

    useEffect(() => {
        dispatch(updateIsSmall(!mdUp));
    }, [mdUp]);

    return (
        <Context.Provider value={ { state, dispatch } } displayName='Navigation'>
            <NavigationStyled className='Navigation'>
                <MediaQuery />
            </NavigationStyled>
        </Context.Provider>
    );
}

export default Navigation;

const NavigationStyled = styled.div`
    background-color: rgb(1, 68, 68);
    padding: 20px;
    color: white;
`;