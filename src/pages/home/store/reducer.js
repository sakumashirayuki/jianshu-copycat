import { original, produce } from "immer";
import { GETHOMEDATA } from "./action";

const defaultState = {
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: []
}; 

const homeReducer = produce((draft, action) => {
  switch (action.type) {
      case GETHOMEDATA:
          draft.topicList = action.topicList;
          draft.articleList = action.articleList;
          draft.recommendList = action.recommendList;
          draft.writerList = action.writerList;
  }
}, defaultState);

export default homeReducer;
