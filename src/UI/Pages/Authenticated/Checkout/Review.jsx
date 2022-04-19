import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UniversalForm, { SubmitButton } from '@enspyred/universal-form';
import OrderDetails from 'UI/common/Shopping/OrderDetails/OrderDetails.jsx';

/* Scripts ---------------------------*/
import * as CartActions from 'Redux/state/cart/actions.js';
import { getTotalCostOfItems } from 'common/utilities.js';
import { reqResp } from 'common/axios.js';

const Review = () => {

    const { cart, user } = useSelector(state => state);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const step = cart.flow.find((step) => step.step === 2);

    const handleOnSubmit = async () => {
        const details = {
            totalCost: getTotalCostOfItems(cart.items),
            items: cart.items,
        }

        const axiosResp = await reqResp('post', '/orders/placeOrder', {
            userProfile: user.profile,
            payment: cart.payment,
            details: details,
        });

        if (axiosResp.success) {
            dispatch(CartActions.flowUnlockThankYou());
            navigate('/auth/checkout/thanks');
        }

        // return axiosResp;
    }

    useEffect(() => {
        if (!step.unlocked) {
            navigate('/auth/checkout/payment');
        }
    }, [step]);

    return (
        <ReviewStyled className='Review'>
            <h1>Review</h1>

            <OrderDetails items={ cart.items } showControls />

            <UniversalForm
                displayName='Checkout Review Form'
                onSubmit={ handleOnSubmit }
            >
                <SubmitButton>Place Order</SubmitButton>
            </UniversalForm>
        </ReviewStyled>
    );
}

export default Review;

const ReviewStyled = styled.div`
    .SubmitButton {
        text-align: center;
    }
`;