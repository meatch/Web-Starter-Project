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

    const renderedValue = thisField ? thisField.value : defaultValue;

    /* Component Did Mount ---------------------------*/
    useEffect(() => {
        const theField = {
            id: id,
            value: defaultValue,
            rules: rules,
        }
        dispatch(addField(theField, state));
    }, []);

    const handleOnChange = ({newValue, e}) => {
        dispatch(updateField(id, newValue, state));
    }

    return (
        <ControlHOCStyled className='ControlHOC'>
            <ControlGroup id={ id } label={ label }>
                <WrappedComponent value={ renderedValue } onChange={ handleOnChange } {...props} />
            </ControlGroup>
        </ControlHOCStyled>
    );
}

export default ControlHOC;

const ControlHOCStyled = styled.div`

`;