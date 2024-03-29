import { actionTypes } from './actionTypes.js';

/*---------------------------
| State Updater (reducer)
---------------------------*/
const reducer = (state, action) => {

    switch(action.type) {
        case actionTypes.NAV_UPDATE_IS_SMALL: {
            return {
                ...state,
                isSmall: action.isSmall,
            };
        }
        case actionTypes.NAV_UPDATE_SHOW_MOBILE_MENU: {
            return {
                ...state,
                showMobileMenu: action.showMobileMenu,
            };
        }
        default: {
            return {...state}
        }
    }
}

export default reducer;