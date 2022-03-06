import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../Context/index.js';
import { addField, updateField } from '../Context/actions.js';

/* Components ---------------------------*/
import ControlGroup from './ControlGroup/ControlGroup.jsx';

const Input = ({label, id, placeholder, value='', rules=[], type='text'}) => {

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
        <InputStyled className='Input'>
            <ControlGroup id={ id } label={ label }>
                <input 
                    id={ id }
                    type={ type }
                    placeholder={ placeholder }
                    value={ thisField ? thisField.value : value }
                    onChange={ handleOnChange }
                />
            </ControlGroup>
        </InputStyled>
    );
}

export default Input;

const InputStyled = styled.div`
    input {
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px gray;
        outline: none;

        &:focus {
            background-color: #eee;
        }
        &.error {
            border: solid 2px red;
        }
    }
`;