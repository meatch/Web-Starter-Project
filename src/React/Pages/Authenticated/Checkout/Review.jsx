import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import UniversalForm, { SubmitButton } from '@enspyred/universal-form';
import OrderList from 'React/common/Orders/OrderList.jsx';

const Review = () => {

    const { checkout } = useSelector(state => state);
    const history = useHistory();

    const step = checkout.find((step) => step.step === 2);

    const handleOnSubmit = async (uformData) => {
        console.log('Handle uformData', uformData);
    }

    useEffect(() => {
        if (!step.unlocked) {
            history.push('/auth/checkout/payment');
        }
    }, [step]);

    return (
        <ReviewStyled className='Review'>
            <h1>Review</h1>

            <OrderList />

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