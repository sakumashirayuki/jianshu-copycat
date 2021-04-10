import produce from "immer";

import { SEARCH_FOCUS, SEARCH_BLUR } from "./action"

const defaultState = {
    focused: false,
    list: []
}; // convert defaultState to an immutable object

const headerReducer = produce((draft, action)=>{
    switch(action.type){
        case SEARCH_FOCUS:
            draft.focused = true;
            break;
        case SEARCH_BLUR:
            draft.focused = false;
            break;
    }
}, defaultState)

export default headerReducer; 

