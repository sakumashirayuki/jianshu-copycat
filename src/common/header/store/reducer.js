import produce from "immer";

import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST } from "./action"

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
        case CHANGE_LIST:
            draft.list = action.data;
            // console.log("hello");
            break;
    }
}, defaultState)

export default headerReducer; 

