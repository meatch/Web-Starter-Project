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
export const updateShowMenu = (showMenu) => {
    return {
        type: actionTypes.NAV_UPDATE_SHOW_MENU,
        showMenu: showMenu,
    };
}