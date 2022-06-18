import { actionTypes } from './actionTypes.js';

/*---------------------------
| State Updater (reducer)
---------------------------*/
const reducer = (state, action) => {

    switch(action.type) {
        case actionTypes.UF_ADD_FIELD: {
            return {
                ...action.newState
            };
        }
        case actionTypes.UF_UPDATE_FIELD: {
            return {
                ...action.newState
            };
        }
        case actionTypes.UF_SUBMIT_FORM: {
            return {
                ...action.newState
            };
        }

        default: {
            return {...state}
        }
    }
}

export default reducer;