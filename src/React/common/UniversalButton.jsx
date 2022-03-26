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
    background-color: hsl(180deg 97% 14%);
    &:hover, &:focus { background-color: hsl(180deg 97% 6%); }
    &:active { background-color: hsl(180deg 97% 22%); }

    /* Secondary */
    &.secondary {
        background-color: hsl(19deg 89% 54%);
        &:hover, &:focus { background-color: hsl(19deg 89% 46%); }
        &:active { background-color: hsl(19deg 89% 62%); }
    }

    /* Remove */
    &.remove {
        background-color: hsl(0deg 87% 40%);
        &:hover, &:focus { background-color: hsl(0deg 87% 32%); }
        &:active { background-color: hsl(0deg 87% 48%); }
    }

`;