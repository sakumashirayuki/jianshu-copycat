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
    }],
    articleList: [{
        id: 1,
        title: "强烈分享5本熬夜也要看完的好书！",
        abstract: "极其强烈推荐5本爱不释手的好书，每本都是压箱底的神作。 它们不仅懂我，还给了我很多启发，是我成长路上必不可少的闲时陪伴。 现在分享给大家，希望也...",
        imgUrl: "https://upload-images.jianshu.io/upload_images/5078275-ff71f1e9dabfaa2b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
        id: 2,
        title: "一个人没有心机的六种表现",
        abstract: "美国心理学家威廉说过，凡是太聪明、太能算计的人，实际上都是很不幸的人，甚至是多病和短命的。专家研究，算计者百分之九十以上都患有心理疾病。这些人感...",
        imgUrl: "https://upload-images.jianshu.io/upload_images/20069870-30d483856b713664.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
        id: 3,
        title: "我确实有一个孩子，但是我没有结婚",
        abstract: "01 我确实有一个孩子，但是我没有结婚。 今年可能是一个“未婚先孕”流行年。 先是郑爽爆出自己在美国生有两个孩子，接着是张碧晨称自己有一个孩子。...",
        imgUrl: "https://upload-images.jianshu.io/upload_images/13724395-1057434a2201d722?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
        id: 4,
        title: "朋友圈中，层次越低的人，越喜欢用这3种“头像”来显摆自己",
        abstract: "社交平台拉近了人与人的距离，因此越来越多的人依赖于社交平台来进行沟通。 但是，社交平台在提高人们的沟通效率的同时，它也成为了更多人的情绪宣泄场。...",
        imgUrl: "https://upload-images.jianshu.io/upload_images/20760323-da2764a07b3f92c6.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }]
}; 

const homeReducer = produce((draft, action) => {
  switch (action.type) {

  }
}, defaultState);

export default homeReducer;
