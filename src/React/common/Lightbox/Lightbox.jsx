import React, { useState } from 'react';
import styled from 'styled-components';

import ActiveArea from './ActiveArea.jsx';
import Modal from './Modal/Modal.jsx';

const Lightbox = ({title, activeContent, modalContent}) => {

    const [showModal, showModalUpdate] = useState(false);

    return (
        <LightboxStyled className='Lightbox'>
            <ActiveArea activeContent={ activeContent } showModalUpdate={ showModalUpdate } />
            {
                showModal &&
                <Modal title={ title } modalContent={ modalContent }  showModalUpdate={ showModalUpdate } />
            }
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    
`;