import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'UI/common/useMediaQuery.js';

/* Components ---------------------------*/
import Lightbox, { ActiveArea, Modal } from 'UI/common/Lightbox/Lightbox.jsx';

const StaffMember = ({member}) => {
    return (
        <StaffMemberStyled className='StaffMember'>
            <Lightbox
                displayName='Staff Member Lightbox'
                title={ member.name }
            >
                <ActiveArea>
                    <img src={ member.image } alt={ member.name } />
                    <h3>{ member.name }</h3>
                </ActiveArea>
                <Modal>
                    <img src={ member.image } alt={ member.name } />

                    <p><b>Year Started:</b> { member.yearStarted }</p>
                    <ul>
                        {
                            member.accolades.map((accolade, idx) => {
                                return <li key={idx}>{accolade}</li>;
                            })
                        }
                    </ul>
                </Modal>
            </Lightbox>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`
    width: 45%;
    margin: 5px;

    @media ${defaultMediaQueries.mdUp} {
        width: 30%;
        margin: 15px;
    }

    @media ${defaultMediaQueries.lgUp} {
        width: 20%;
        margin: 20px;
    }

    img {
        width: 100%;
        display: block;
        min-height: 150px;
    }

    h3 {
        color: white;
        background-color: #014444;
        margin: 0px;
        padding: 5px 10px;
    }
`;