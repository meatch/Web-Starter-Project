import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { staffData } from './staffData.js';

/* Components ---------------------------*/
import StaffMember from './StaffMember.jsx';

const StaffProfiles = () => {

    return (
        <StaffProfilesStyled className='StaffProfiles'>
            <div className="wrapper">
                {
                    staffData.map((member, idx) => {
                        return <StaffMember key={ idx } member={ member } />
                    })
                }
            </div>
        </StaffProfilesStyled>
    );
}

export default StaffProfiles;

const StaffProfilesStyled = styled.div`
    background-color: teal;
    padding: 20px;
    margin: 20px 0px;

    .wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;