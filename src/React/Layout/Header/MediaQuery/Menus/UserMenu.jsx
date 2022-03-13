import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const UserMenu = () => {

    const { user } = useSelector((state) => state);

    return (
        <UserMenuStyled className='UserMenu'>
            <h2>User Menu</h2>
                {
                    !user.loggedIn
                        ?   <NavLink to={ '/user' }>Login</NavLink>
                        :   <>
                                <NavLink to={ '/user/cart' }>Cart</NavLink>
                                <NavLink to={ '/user/update' }>Account</NavLink>
                                <NavLink to={ '/logout' }>Logout</NavLink>
                            </>
                }
        </UserMenuStyled>
    );
}

export default UserMenu;

const UserMenuStyled = styled.nav`
    a {
        display: inline-block;
        margin-left: 10px;

        &.active {
            color: white;
        }
    }
`;