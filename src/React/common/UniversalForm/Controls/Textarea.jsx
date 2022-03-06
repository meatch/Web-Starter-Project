import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../Context/index.js';
import { addField, updateField } from '../Context/actions.js';

/* Components ---------------------------*/
import ControlGroup from './ControlGroup/ControlGroup.jsx';

const Textarea = ({label, id, placeholder, value='', rules=[]}) => {

    const { dispatch, state } = useContext(Context);

    const thisField = state.fields.find((field) => field.id === id);

    /* Component Did Mount ---------------------------*/
    useEffect(() => {
        const theField = {
            id: id,
            value: value,
            rules: rules,
        }
        dispatch(addField(theField, state));
    }, []);

    const handleOnChange = (e) => {
        dispatch(updateField(id, e.target.value, state));
    }

    return (
        <TextareaStyled className='Textarea'>
            <ControlGroup id={ id } label={ label }>
                <textarea 
                    id={ id }
                    placeholder={ placeholder }
                    value={ thisField ? thisField.value : value }
                    onChange={ handleOnChange }
                /> 
            </ControlGroup>
        </TextareaStyled>
    );
}

export default Textarea;

const TextareaStyled = styled.div`
    textarea {
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px gray;
        outline: none;

        height: 250px;
        resize: none;

        &:focus {
            background-color: #eee;
        }
        &.error {
            border: solid 2px red;
        }
    }
`;