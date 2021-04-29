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
      asset: 0
    }
}; 
// postTime: "2021.01.02 22:13:13",
// showScroll: false,
// authorInfo: {
//   name: "冉心教育",
//   imgUrl: "https://upload.jianshu.io/users/upload_avatars/11624805/a87673f4-5a29-4711-b7b4-c7d7682f1fbf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
//   level: 36,
//   wordAmount: 208,
//   readAmount: 6233,
//   asset: 635
// }

const homeReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_DETAIL:
      draft.title = action.title;
      draft.content = action.content;
      draft.authorInfo = action.authorInfo;
      break;
    case TOGGLETOPSHOW:
      draft.showScroll = action.flag;
      break;
  }
}, defaultState);

export default homeReducer;