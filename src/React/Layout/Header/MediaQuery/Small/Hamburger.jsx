import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
} from '@fortawesome/free-solid-svg-icons';

/* Context ---------------------------*/
import Context from '../../Context/index.js';
import { updateShowMenu } from '../../Context/actions.js';


const Hamburger = () => {

    const { dispatch, state } = useContext(Context);

    const clickHandler = () => {
        dispatch(updateShowMenu(!state.showMenu));
    }

    return (
        <HamburgerStyled className='Hamburger' onClick={ clickHandler }>
            <FontAwesomeIcon icon={ faBars } />
        </HamburgerStyled>
    );
}

export default Hamburger;

const HamburgerStyled = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;

    font-size: 30px;
    color: white;
    cursor: pointer;
`;