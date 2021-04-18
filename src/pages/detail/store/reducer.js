import { original, produce } from "immer";

import { CHANGE_DETAIL } from "./action"

const defaultState = {
    title: "",
    content: ""
}; 

const homeReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_DETAIL:
      draft.title = action.title;
      draft.content = action.content;
      break;
  }
}, defaultState);

export default homeReducer;