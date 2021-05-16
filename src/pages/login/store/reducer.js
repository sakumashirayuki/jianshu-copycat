import { original, produce } from "immer";

import { CHANGELOGIN, CHANGELOGOUT, CHANGEREMEMBER } from "./action";

const defaultState = {
    login: false,
    isRemember: false
}; 

const homeReducer = produce((draft, action) => {
  switch (action.type) {
      case CHANGELOGIN:
          draft.login = true;
          break;
      case CHANGELOGOUT:
          draft.login = false;
          break;
      case CHANGEREMEMBER:
          const prevRemember = original(draft).isRemember;
          draft.isRemember = !prevRemember;
          break;
  }
}, defaultState);

export default homeReducer;
