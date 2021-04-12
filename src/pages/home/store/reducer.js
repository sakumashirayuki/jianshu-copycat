import { original, produce } from "immer";

const defaultState = {
    topicList: [{
        id: 1,
        title: "社会热点",
        imgUrl: "https://wx2.sinaimg.cn/large/4d09ff97ly8gpgudothx9j20dw0dw40i.jpg"
    },
    {
        id: 2,
        title: "手绘",
        imgUrl: "https://wx1.sinaimg.cn/large/007jlrywly8gpdkf9j8fhj30dw0dwwgx.jpg"
    },
    {
        id: 3,
        title: "校园生活",
        imgUrl: "https://wx2.sinaimg.cn/large/006ztvZBly8gpgr6gm4u7j30dw0dwtaa.jpg"
    },
    {
        id: 4,
        title: "表情包",
        imgUrl: "https://wx1.sinaimg.cn/large/007cfdbyly8gpgyami43oj30dw0dw0to.jpg"
    },
    {
        id: 5,
        title: "旅游",
        imgUrl: "https://img9.doubanio.com/view/group/sqxs/public/8f11b2285655782.webp"
    },
    {
        id: 6,
        title: "时尚",
        imgUrl: "https://img9.doubanio.com/icon/g83759-2.jpg"
    }]
}; 

const homeReducer = produce((draft, action) => {
  switch (action.type) {

  }
}, defaultState);

export default homeReducer;
