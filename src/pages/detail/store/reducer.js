import { original, produce } from "immer";

import { CHANGE_DETAIL, TOGGLETOPSHOW } from "./action"

const defaultState = {
    title: "",
    content: "",
    showScroll: false
}; 

const homeReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_DETAIL:
      draft.title = action.title;
      draft.content = action.content;
      break;
    case TOGGLETOPSHOW:
      draft.showScroll = action.flag;
      break;
  }
}, defaultState);

export default homeReducer;