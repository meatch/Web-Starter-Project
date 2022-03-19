import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

const Breadcrumb = ({step}) => {

    const theClassName = classnames({
        'Breadcrumb': true,
        'locked': !step.unlocked,
    });

    return (
        <BreadcrumbStyled className={ theClassName }>
            {
                step.unlocked
                ? <NavLink to={ step.url }>{ step.title }</NavLink>
                : <span>{ step.title }</span>
            }
        </BreadcrumbStyled>
    );
}

export default Breadcrumb;

const BreadcrumbStyled = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 10px;
    padding-right: 10px;
    border-right: solid 1px #eee;

    &:last-child {
        border: none;
    }

    &.locked {
        cursor: not-allowed;
        span {
            color: #999;
            pointer-events: none;
        }
    }

    a {
        color: teal;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }

        &.active {
            color: maroon;
        }
    }
`;