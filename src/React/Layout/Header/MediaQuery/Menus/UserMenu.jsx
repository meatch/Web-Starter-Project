import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const UserMenu = () => {

    const { cart } = useSelector((state) => state);
    const { user } = useSelector((state) => state);

    const itemCount = cart.items.length > 0 ? ` (${cart.items.length})` : '';

    return (
        <UserMenuStyled className='UserMenu'>
            <h2>User Menu</h2>
                {
                    !user.loggedIn
                        ?   <NavLink to={ '/access/login' }>Login</NavLink>
                        :   <>
                                <NavLink to={ '/auth/user' }>Account</NavLink>
                                <NavLink to={ '/access/logout' }>Logout</NavLink>
                            </>
                }
                <NavLink to={ '/cart' }>Cart{itemCount}</NavLink>
        </UserMenuStyled>
    );
}

export default UserMenu;

const UserMenuStyled = styled.nav`
    @media ${defaultMediaQueries.mdUp} {
        a {
            display: inline-block;
            margin-left: 10px;

            &.active {
                color: white;
            }
        }
    }
`;