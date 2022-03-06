import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import ControlHOC from './ControlHOC.jsx';

const Checkbox = ({onChange, id, value, displayText='Add Display Text' }) => {

    const handleOnchange = (e) => {
        onChange({ newValue: e.target.checked, e: e });
    }

    // If someone passes empty string, we want to convert to boolean false by default.
    const renderedBoolean = !!value;

    return (
        <CheckboxStyled className='Checkbox'>
            <div className="row">
                <div className="checkbox-control">
                    <input
                        id={ id }
                        type={ 'checkbox' }
                        checked={ renderedBoolean }
                        onChange={ handleOnchange }
                    />
                </div>
                <div className="displayText">
                    { displayText }
                </div>
            </div>
        </CheckboxStyled>
    );
}

export default ControlHOC(Checkbox);

const CheckboxStyled = styled.div`

    .row {
        display: flex;
        align-items: center;
    }

    input {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
`;