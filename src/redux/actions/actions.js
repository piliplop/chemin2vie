// actions/actions.js

// todo : #TYPE# = "#TYPE#";
export const CHANGE_TAB = 'CHANGE_TAB';

// todo : export const #(modifier)?# = #(argument)*# => ({type: #TYPE#, #(payload: modifier)?#});
export const changeTab = new_tab => ({type: CHANGE_TAB, payload: new_tab});