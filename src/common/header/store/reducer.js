import { original, produce } from "immer";

import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  CHANGE_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE
} from "./action";

const defaultState = {
  focused: false,
  list: [],
  page: 1, // current page
  totalPage: 1, // the initial total page is 1
  mouseIn: false,
}; // convert defaultState to an immutable object

const headerReducer = produce((draft, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      draft.focused = true;
      break;
    case SEARCH_BLUR:
      draft.focused = false;
      break;
    case CHANGE_LIST:
      draft.list = action.data;
      draft.totalPage = action.totalPage;
      break;
    case MOUSE_ENTER:
      draft.mouseIn = true;
      break;
    case MOUSE_LEAVE:
      draft.mouseIn = false;
      break;
    case CHANGE_PAGE:
      let current = original(draft).page + 1;
      current = current % draft.totalPage === 0 ? draft.totalPage : current % draft.totalPage;
      draft.page = current;
      break;
  }
}, defaultState);

export default headerReducer;
