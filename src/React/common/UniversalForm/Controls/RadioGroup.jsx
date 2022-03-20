import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import ControlHOC from './ControlHOC/ControlHOC.jsx';

const RadioGroup = ({onChange, id, value, options=[] }) => {

    const handleOnchange = (e) => {

        console.log('Radio checked, value', e.target.checked, e.target.value);

        if (e.target.checked) {
            onChange({ newValue: e.target.value, e: e });
        }
    }

    return (
        <RadioGroupStyled className='RadioGroup'>
            {
                options.map((o,idx) => {
                    return (
                        <div key={ idx } className="row">
                            <div className="checkbox-control">
                                <input
                                    name={ id }
                                    type={ 'radio' }
                                    value={ o.value }
                                    checked={ o.value === value }
                                    onChange={ handleOnchange }
                                />
                            </div>
                            <div className="displayText">
                                { o.display }
                            </div>
                        </div>
                    )
                })
            }
        </RadioGroupStyled>
    );
}

export default ControlHOC(RadioGroup);

const RadioGroupStyled = styled.div`

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