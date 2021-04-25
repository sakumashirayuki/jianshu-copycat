import { original, produce } from "immer";
import { GETHOMEDATA, ADDHOMEDATA, TOGGLETOPSHOW, CHANGEWRITERPAGE, ADDRECOMMENDIMG } from "./action";

const defaultState = {
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    writerPage: 1,
    writerTotalPage: 1, // initial total page is 1
    showScroll: false
}; 

const homeReducer = produce((draft, action) => {
  switch (action.type) {
      case GETHOMEDATA:
          draft.topicList = action.topicList;
          draft.articleList = action.articleList;
          draft.writerList = action.writerList;
          draft.writerTotalPage = action.writerTotalPage;
          break;
      case ADDHOMEDATA:
          const preList = original(draft).articleList;
          draft.articleList = preList.concat(action.list);
          break;
      case CHANGEWRITERPAGE:
          const curWriterPage = original(draft).writerPage + 1;
          draft.writerPage = curWriterPage % draft.writerTotalPage === 0 ? draft.writerTotalPage : curWriterPage % draft.writerTotalPage;
          break;
      case ADDRECOMMENDIMG:
          draft.recommendList = action.recommendList;
      case TOGGLETOPSHOW:
          draft.showScroll = action.flag;
          break;
  }
}, defaultState);

export default homeReducer;
