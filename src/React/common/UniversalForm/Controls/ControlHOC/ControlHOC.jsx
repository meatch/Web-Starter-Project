import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

/* Context ---------------------------*/
import Context from '../../Context/index.js';
import { addField, updateField } from '../../Context/actions.js';

/* Components ---------------------------*/
import Label from './Label.jsx';
import Control from './Control.jsx';

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
            label: label,
            value: defaultValue,
            rules: rules,
        }
        dispatch(addField(theField, state));
    }, []);

    const handleOnChange = ({newValue, e}) => {
        dispatch(updateField(id, newValue, state));
    }

    const theClassName = classnames({
        'ControlHOC': true,
        'ControlGroup': true,
        'error': thisField && !thisField.isValid,
    });

    return (
        <ControlHOCStyled className={ theClassName }>
            <Label id={ id } label={ label } />
            <Control id={ id }>
                <WrappedComponent value={ renderedValue } onChange={ handleOnChange } {...props} />
            </Control>
        </ControlHOCStyled>
    );
}

export default ControlHOC;

const ControlHOCStyled = styled.div`
    &.error {
        input, textarea, select {
            border: solid 2px red;
        }
    }
`;