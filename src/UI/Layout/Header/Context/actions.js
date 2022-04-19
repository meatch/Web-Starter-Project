import { actionTypes } from './actionTypes.js';

/*---------------------------
| Actions (Action Creators)
---------------------------*/
export const updateIsSmall = (isSmall) => {
    return {
        type: actionTypes.NAV_UPDATE_IS_SMALL,
        isSmall: isSmall,
    };
}
export const updateShowMobileMenu = (showMobileMenu) => {
    return {
        type: actionTypes.NAV_UPDATE_SHOW_MOBILE_MENU,
        showMobileMenu: showMobileMenu,
    };
}