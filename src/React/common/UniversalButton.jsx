import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const UniversalButton = ({ children, onClick, branding='primary' }) => {

    const theClassName = classnames({
        'UniversalButton': true,
        [branding]: true,
    });

    return (
        <UniversalButtonStyled
            className={ theClassName }
            onClick={ onClick }
        >
            { children }
        </UniversalButtonStyled>
    );
}

export default UniversalButton;

const UniversalButtonStyled = styled.button`
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;

    /* Primary / Default */
    background-color: #014646;
    &:hover, &:focus { background-color: #001e1e; }
    &:active { background-color: #026f6f; }

    /* Secondary */
    &.secondary {
        background-color: #f26321;
        &:hover, &:focus { background-color: #de4f0d; }
        &:active { background-color: #f47e48; }
    }

    /* Remove */
    &.remove {
        background-color: #bf0d0d;
        &:hover, &:focus { background-color: #990b0b; }
        &:active { background-color: #e51010; }
    }

`;