import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';
import * as AuthActions from 'Redux/state/auth/actions.js';

const UserMenu = () => {

    const { cart, auth } = useSelector((state) => state);
    const dispatch = useDispatch();
    const itemCount = cart.items.length > 0 ? ` (${cart.items.length})` : '';

    return (
        <UserMenuStyled className='UserMenu'>
            <h2>User Menu</h2>
                {
                    !auth.isAuthenticated
                        ?   <a href="#" onClick={ () => dispatch(AuthActions.login()) }>Login</a>
                        :   <a href="#" onClick={ () => dispatch(AuthActions.logout()) }>Logout</a>
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