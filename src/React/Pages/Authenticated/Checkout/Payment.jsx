import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

/* Universal Form ---------------------------*/
import UniversalForm, { Input, CreditCard, SubmitButton } from 'React/common/UniversalForm/UniversalForm.jsx';

const Payment = () => {

    const { user } = useSelector(state => state);

    const handleOnSubmit = (resp) => {
        console.log('Handling resp', resp);
    }

    const ccProps = {
        ccNum: { defaultValue: '4111111111111111' },
        ccExp: { defaultValue: '11/24' },
        ccCvv: { defaultValue: '123' },
    }

    return (
        <PaymentStyled className='Payment'>
            <h1>Payment</h1>

            <UniversalForm
                displayName='Checkout Payment Form'
                method='post'
                apiUrl='/checkout/payment'
                onSubmit={ handleOnSubmit }
            >
                <div className="name">
                    <Input
                        label='First'
                        id='first'
                        type='text'
                        placeholder='First name'
                        defaultValue={ user.profile.first }
                        rules={ [ 'required' ] }
                    />
                    <Input
                        label='Last'
                        id='last'
                        type='text'
                        placeholder='Last name'
                        defaultValue={ user.profile.last }
                        rules={ [ 'required' ] }
                    />
                </div>

                <CreditCard {...ccProps} />

                {/* <Address /> */}
                <SubmitButton>Add Payment</SubmitButton>
            </UniversalForm>



        </PaymentStyled>
    );
}

export default Payment;

const PaymentStyled = styled.div`
    .name {
        display: flex;
        width: 100%;
        .ControlGroup { flex: 1; }
        .ControlGroup:first-child { margin-right: 10px; }
        .ControlGroup:last-child { margin-left: 10px; }
    }
`;