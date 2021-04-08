import { SEARCH_FOCUS, SEARCH_BLUR } from "./action"

const defaultState = {
    focused: false
};
const headerReducer = (state = defaultState, action)=>{
    switch(action.type){
        case SEARCH_FOCUS:
            return {
                focused: true
            };
        case SEARCH_BLUR:
            return {
                focused: false
            };
        default:
            return state;
    }
};

export default headerReducer; 

