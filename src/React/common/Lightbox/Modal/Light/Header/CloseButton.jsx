import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

const CloseButton = ({closeModal}) => {

    return (
        <CloseButtonStyled className='CloseButton' onClick={ closeModal }>
            <FontAwesomeIcon icon={ faTimes } />
        </CloseButtonStyled>
    );
}

export default CloseButton;

const CloseButtonStyled = styled.button`
    background-color: transparent;
    border: none;

    display: block;
    width: 100%;
    height: 40px;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;

    opacity: .7;
    color: white;

    &:hover {
        opacity: 1;
    }
    &:active {
        color: yellow;
    }
`;