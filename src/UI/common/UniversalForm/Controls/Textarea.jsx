import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../Context/index.js';
import { addField, updateField } from '../Context/actions.js';

/* Components ---------------------------*/
import FormGroup from './FormGroup/FormGroup.jsx';

const Textarea = (props) => {

    const {
        id,
        defaultValue='',
        label,
        rules=[],
        placeholder,
    } = props;


    const { dispatch, state } = useContext(Context);

    const thisField = state.fields.find((field) => field.id === id);

    const renderedValue = thisField ? thisField.value : defaultValue;

    /* Component Did Mount ---------------------------*/
    useEffect(() => {
        const theField = {
            id: id,
            label: label,
            value: defaultValue,
            rules: rules,
        }
        dispatch(addField(theField, state));
    }, []);

    const onChange = ({newValue, e}) => {
        dispatch(updateField(id, newValue, state));
    }

    return (
        <FormGroup thisField={ thisField } id={ id } label={ label }>
            <TextareaStyled className='Textarea'>
                <textarea
                    id={ id }
                    placeholder={ placeholder }
                    value={ renderedValue }
                    onChange={ onChange }
                />
            </TextareaStyled>
        </FormGroup>
    );
}

export default Textarea;

const TextareaStyled = styled.div`
    textarea {
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px #eee;
        border-radius: 5px;
        outline: none;

        height: 250px;
        resize: none;

        &:focus {
            background-color: #eee;
            border-color: #999;
        }
        &.error {
            border: solid 2px red;
        }
    }
`;