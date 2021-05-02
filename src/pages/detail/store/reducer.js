import { original, produce } from "immer";

import { CHANGE_DETAIL, TOGGLETOPSHOW } from "./action"

const defaultState = {
    title: "",
    content: "",
    postTime: "",
    showScroll: false,
    authorInfo: {
      name: "",
      imgUrl: "",
      level: 0,
      wordAmount: 0,
      readAmount: 0,
      asset: 0,
      workList: []
    },
    recommendList: []
}; 

const homeReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_DETAIL:
      draft.title = action.title;
      draft.content = action.content;
      draft.authorInfo = action.authorInfo;
      draft.recommendList = action.recommendList;
      break;
    case TOGGLETOPSHOW:
      draft.showScroll = action.flag;
      break;
  }
}, defaultState);

export default homeReducer;