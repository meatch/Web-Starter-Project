import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../Context/index.js';
import { addField, updateField } from '../Context/actions.js';

/* Components ---------------------------*/
import ControlGroup from './ControlGroup/ControlGroup.jsx';

const ControlHOC = WrappedComponent => (props) => {

    const {
        id,
        defaultValue='',
        label,
        rules,
    } = props;


    const { dispatch, state } = useContext(Context);

    const thisField = state.fields.find((field) => field.id === id);

    /* Component Did Mount ---------------------------*/
    useEffect(() => {
        const theField = {
            id: id,
            value: defaultValue,
            rules: rules,
        }
        dispatch(addField(theField, state));
    }, []);

    const handleOnChange = (e) => {
        dispatch(updateField(id, e.target.value, state));
    }

    return (
        <ControlHOCStyled className='ControlHOC'>
            <ControlGroup id={ id } label={ label }>
                <WrappedComponent onChange={ handleOnChange } thisField={ thisField } {...props} />
            </ControlGroup>
        </ControlHOCStyled>
    );
}

export default ControlHOC;

const ControlHOCStyled = styled.div`
    input, textarea {
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px #ccc;
        outline: none;

        &:focus {
            background-color: #eee;
            border-color: #999;
        }
        &.error {
            border: solid 2px red;
        }
    }
    
`;