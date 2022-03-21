import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

/* Scripts ---------------------------*/
import * as CartActions from 'Redux/state/cart/actions.js';

const Thanks = () => {

    const { cart } = useSelector(state => state);
    const history = useHistory();
    const dispatch = useDispatch();

    const step = cart.flow.find((step) => step.step === 3);

    useEffect(() => {
        if (!step.unlocked) {
            history.push('/auth/checkout/review');
        } else {
            // Dismount - reset cart
            return () => {
                dispatch(CartActions.reset());
            }
        }
    }, [step]);

    return (
        <ThanksStyled className='Thanks'>
            <h1>Thanks for Your Order</h1>
        </ThanksStyled>
    );
}

export default Thanks;

const ThanksStyled = styled.div`
    h1 {
        padding: 50px;
        text-align: center;
    }
`;