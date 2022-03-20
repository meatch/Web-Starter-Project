import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Review = () => {

    const { checkout } = useSelector(state => state);
    const history = useHistory();

    const step = checkout.find((step) => step.step === 2);

    useEffect(() => {
        if (!step.unlocked) {
            history.push('/auth/checkout/payment');
        }
    }, [step]);

    return (
        <ReviewStyled className='Review'>
            <h1>Review</h1>
        </ReviewStyled>
    );
}

export default Review;

const ReviewStyled = styled.div`

`;