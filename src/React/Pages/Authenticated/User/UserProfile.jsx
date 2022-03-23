import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const UserProfile = () => {

    const { user } = useSelector(state => state);

    return (
        <UserProfileStyled className='UserProfile'>
            <img src={ user.profile.picture } alt={ user.profile.name } />
            <h2>{ user.profile.name }</h2>

            <ul>
                <li><b>UserID:</b> { user.profile.sub }</li>
                <li><b>Email:</b> { user.profile.email }</li>
            </ul>
        </UserProfileStyled>
    );
}

export default UserProfile;

const UserProfileStyled = styled.div`

`;