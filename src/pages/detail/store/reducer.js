import { original, produce } from "immer";

const defaultState = {
    title: "男人这四样东西只会留给最爱的人",
    content: '<img src="https://picsum.photos/1000/600" alt=""/><p>对于一个男人来说，有这么四样东西，他只会留给他最爱的人。</p><p>如果一个男人把这四样东西都给你了，那么请你一定要好好珍惜他。</p><p>第一，男人的钱。</p><p>男人的钱在哪里？他的心就在哪里。</p><p>第二、男人的眼泪。</p><p>如果一个男人在你面前掉眼泪，把最脆弱的一面展示给你看。那么你对他来说一定是非常重要的人。</p><p>第三、男人的好脾气。</p><p>男人对女人最大的偏爱，莫过于他对你的耐心。不要嘲笑忍者神龟。那是男人最疼你的表现。</p><p>第四、男人的时间。</p><p>男人只会把他的时间留给他最爱的人。再忙也抽得出时间陪你的人。请一定要好好善待！</p>'
}; 

const homeReducer = produce((draft, action) => {
  switch (action.type) {
  }
}, defaultState);

export default homeReducer;