import { ActionTypes } from '../actionTypes';

export const unlockStep = (step) => {
    return ({
        type: ActionTypes.CHECKOUT_UNLOCK_STEP,
        step: step,
    });
}