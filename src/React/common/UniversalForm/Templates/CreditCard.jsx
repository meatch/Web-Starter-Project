import React from 'react';
import styled from 'styled-components';

import Input from '../Controls/Input.jsx';
import Fieldset from '../Fieldset.jsx';

const CreditCard = ({ccNum={}, ccExp={}, ccCvv={}}) => {
    return (
        <CreditCardStyled className='CreditCard'>
            <Fieldset title="Credit Card">
                <div className="row1">
                    <Input
                        label='CC Number'
                        id='ccNum'
                        type='text'
                        placeholder='CC Number'
                        rules={ [ 'required', 'ccNum' ] }
                        maxLength={ 16 }
                        {...ccNum}
                    />
                </div>
                <div className="row2">
                    <Input
                        label='CC Expiration'
                        id='ccExp'
                        type='text'
                        placeholder='mm/yy'
                        rules={ [ 'required', 'ccExp' ] }
                        {...ccExp}
                    />
                    <Input
                        label='CC Verification Value'
                        id='ccCvv'
                        type='text'
                        placeholder='CVV'
                        rules={ [ 'required', 'ccCvv' ] }
                        maxLength={ 3 }
                        {...ccCvv}
                    />
                </div>
            </Fieldset>
        </CreditCardStyled>
    );
}

export default CreditCard;

const CreditCardStyled = styled.div`
    .row2 {
        display: flex;
        width: 100%;
        .ControlGroup { flex: 1; }
        .ControlGroup:first-child { margin-right: 10px; }
        .ControlGroup:last-child { margin-left: 10px; }
    }
`;