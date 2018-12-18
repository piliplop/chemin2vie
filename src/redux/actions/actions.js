// actions/actions.js

// todo : #TYPE# = "#TYPE#";
export const CHANGE_TAB = 'CHANGE_TAB';
export const TOGGLE_MENU = 'TOGGLE_MENU';

// todo : export const #(modifier)?# = #(argument)*# => ({type: #TYPE#, #(payload: modifier)?#});
export const changeTab = new_tab => ({type: CHANGE_TAB, payload: new_tab});
export const toggleMenu = () => ({type: TOGGLE_MENU});