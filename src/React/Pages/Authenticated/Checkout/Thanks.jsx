import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Thanks = () => {

    const { checkout } = useSelector(state => state);
    const history = useHistory();

    const step = checkout.find((step) => step.step === 3);

    useEffect(() => {
        if (!step.unlocked) {
            history.push('/auth/checkout/review');
        }
    }, [step]);

    return (
        <ThanksStyled className='Thanks'>
            <h1>Thanks</h1>
        </ThanksStyled>
    );
}

export default Thanks;

const ThanksStyled = styled.div`

`;