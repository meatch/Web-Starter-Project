import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import UniversalForm, { Input, CreditCard, Address, SubmitButton } from '@enspyred/universal-form';
import { useHistory } from 'react-router-dom';

/* redux ---------------------------*/
import * as CartActions from 'Redux/state/cart/actions.js';

const Payment = () => {

    const { auth, cart } = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnSubmit = async (uformData) => {
        dispatch(CartActions.addPayment(uformData.requestObject));
        dispatch(CartActions.flowUnlockReview());
        history.push('/auth/checkout/review');
    }

    useEffect(() => {
        if (cart.items.length < 1) {
            history.push('/merch');
        }
    }, [cart.items]);

    const defaultProps = {
        cc: {
            ccNum: { defaultValue: '4111111111111111' },
            ccExp: { defaultValue: '11/24' },
            ccCvv: { defaultValue: '123' },
        },
        address: {
            addr1:  { defaultValue: '123 Anywhere Street' },
            addr2:  { defaultValue: 'Apt G' },
            city:   { defaultValue: 'Colorado Springs' },
            state:  { defaultValue: 'CO' },
            zip:    { defaultValue: '80922' },
        },
    }

    return (
        <PaymentStyled className='Payment'>
            <h1>Payment</h1>

            <UniversalForm
                displayName='Checkout Payment Form'
                onSubmit={ handleOnSubmit }
            >
                <div className="name">
                    <Input
                        label='First'
                        id='first'
                        type='text'
                        placeholder='First name'
                        defaultValue={ auth.userProfile.given_name }
                        rules={ [ 'required' ] }
                    />
                    <Input
                        label='Last'
                        id='last'
                        type='text'
                        placeholder='Last name'
                        defaultValue={ auth.userProfile.family_name }
                        rules={ [ 'required' ] }
                    />
                </div>

                <CreditCard {...defaultProps.cc} />
                <Address title='Billing Address' {...defaultProps.address} />

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