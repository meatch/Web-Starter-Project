import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import UniversalForm, { Input, CreditCard, Address, SubmitButton } from '@enspyred/universal-form';
import { useNavigate } from 'react-router-dom';

/* Scripts ---------------------------*/
import * as CartActions from 'Redux/state/cart/actions.js';
import sampleFormData from 'data/sampleFormData/sampleFormData.js';

const Payment = () => {

    // Hooks
    const { user, cart } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formData = sampleFormData(true); //pass true to force sample data

    // Lifecycle
    useEffect(() => {
        if (cart.items.length < 1) {
            navigate('/merch');
        }
    }, [cart.items]);


    // Component Logic
    const handleOnSubmit = async (uFormData) => {
        dispatch(CartActions.addPayment(uFormData.requestObject));
        dispatch(CartActions.flowUnlockReview());
        navigate('/auth/checkout/review');
    }

    const defaultProps = {
        cc: {
            ccNum: { defaultValue: formData.render('ccNum') },
            ccExp: { defaultValue: formData.render('ccExp') },
            ccCvv: { defaultValue: formData.render('ccCvv') },
        },
        address: {
            addr1:  { defaultValue: formData.render('addr1') },
            addr2:  { defaultValue: formData.render('addr2') },
            city:   { defaultValue: formData.render('city') },
            state:  { defaultValue: formData.render('state') },
            zip:    { defaultValue: formData.render('zip') },
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
                        defaultValue={ user.profile.given_name }
                        rules={ [ 'required' ] }
                    />
                    <Input
                        label='Last'
                        id='last'
                        type='text'
                        placeholder='Last name'
                        defaultValue={ user.profile.family_name }
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