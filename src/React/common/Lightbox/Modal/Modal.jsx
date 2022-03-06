import React, { useEffect } from 'react';
import styled from 'styled-components';

import Dark from './Dark.jsx';
import Light from './Light/Light.jsx';

const Modal = ({title, modalContent, showModalUpdate}) => {

    // Component Did Mount
    useEffect(() => {
        const handleOnKeyDown = (e) => {

            console.log('What Key Was Pressed', e.keyCode);

            if (e.keyCode === 27) {
                closeModal();
            }
        }

        document.addEventListener("keydown", handleOnKeyDown);
        
        // dismounts
        return () => {
            document.removeEventListener("keydown", handleOnKeyDown);
        }

    }, []);


    const closeModal = () => {
        showModalUpdate(false);
    }

    return (
        <ModalStyled className='Modal'>
            <Dark closeModal={ closeModal } />
            <Light closeModal={ closeModal } title={ title } modalContent={ modalContent } />
        </ModalStyled>
    );
}

export default Modal;

const ModalStyled = styled.div`
    border: solid 5px red;
`;