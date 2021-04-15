import { original, produce } from "immer";
import { actions } from ".";
import { GETHOMEDATA, ADDHOMEDATA, TOGGLETOPSHOW } from "./action";

const defaultState = {
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    showScroll: false
}; 

const homeReducer = produce((draft, action) => {
  switch (action.type) {
      case GETHOMEDATA:
          draft.topicList = action.topicList;
          draft.articleList = action.articleList;
          draft.recommendList = action.recommendList;
          draft.writerList = action.writerList;
          break;
      case ADDHOMEDATA:
          const preList = original(draft).articleList;
          draft.articleList = preList.concat(action.list);
          break;
      case TOGGLETOPSHOW:
          draft.showScroll = action.flag;
          break;
  }
}, defaultState);

export default homeReducer;
