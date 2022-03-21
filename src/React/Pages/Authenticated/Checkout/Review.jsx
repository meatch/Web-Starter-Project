import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import UniversalForm, { SubmitButton } from '@enspyred/universal-form';
import ItemList from 'React/common/Cart/ItemList.jsx';

/* Scripts ---------------------------*/
import { getTotalCostOfItems } from 'common/utilities.js';
import { reqResp } from 'common/axios.js';

const Review = () => {

    const { cart, user } = useSelector(state => state);
    const history = useHistory();

    const step = cart.flow.find((step) => step.step === 2);

    const handleOnSubmit = async () => {
        console.log('Place Order');

        const details = {
            totalCost: getTotalCostOfItems(cart.items),
            items: cart.items,
        }

        const axiosResp = await reqResp('post', '/orders/placeOrder', {
            userID: user.profile._id,
            payment: cart.payment,
            details: details,
        });

        // if (axiosResp.success) {
        //     dispatch(UserActions.login(axiosResp.payload));
        // }

        return axiosResp;
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