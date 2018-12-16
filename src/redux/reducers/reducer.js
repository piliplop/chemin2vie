import { CHANGE_TAB } from '../actions/actions'; 

export const TABS = {
	formation: 0,
	competences: 1,
	experiences: 2,
	interests: 3,
};

const initialState = {
	current_tab: TABS.formation
};
  
const rootReducer = (state = initialState, action) => {
	switch(action.type){
	// todo : case #TYPE# : return {...state, #?#}
	case CHANGE_TAB: return {
		...state,
		current_tab: action.payload
	};
	default: return state;
	}
};
  
export default rootReducer;