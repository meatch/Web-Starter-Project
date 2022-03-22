import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import UniversalForm, { SubmitButton } from '@enspyred/universal-form';
import ItemList from 'React/common/Cart/ItemList.jsx';

/* Scripts ---------------------------*/
import * as CartActions from 'Redux/state/cart/actions.js';
import { getTotalCostOfItems } from 'common/utilities.js';
import { reqResp } from 'common/axios.js';

const Review = () => {

    const { cart, auth } = useSelector(state => state);
    const dispatch = useDispatch();

    const history = useHistory();

    const step = cart.flow.find((step) => step.step === 2);

    const handleOnSubmit = async () => {
        const details = {
            totalCost: getTotalCostOfItems(cart.items),
            items: cart.items,
        }

        const axiosResp = await reqResp('post', '/orders/placeOrder', {
            userProfile: auth.userProfile,
            payment: cart.payment,
            details: details,
        });

        if (axiosResp.success) {
            dispatch(CartActions.flowUnlockThankYou());
            history.push('/auth/checkout/thanks');
        }

        // return axiosResp;
    }

    useEffect(() => {
        if (!step.unlocked) {
            history.push('/auth/checkout/payment');
        }
    }, [step]);

    return (
        <ReviewStyled className='Review'>
            <h1>Review</h1>

            <ItemList items={ cart.items } showControls />

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