import { original, produce } from "immer";

import { CHANGELOGIN, CHANGELOGOUT } from "./action";

const defaultState = {
    login: false
}; 

const homeReducer = produce((draft, action) => {
  switch (action.type) {
      case CHANGELOGIN:
          draft.login = true;
          break;
      case CHANGELOGOUT:
          draft.login = false;
          break;
  }
}, defaultState);

export default homeReducer;
