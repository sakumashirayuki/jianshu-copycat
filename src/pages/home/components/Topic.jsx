import React from "react";
import { useSelector } from "react-redux"

import {
    TopicWrapper,
    TopicItem,
    MoreTopic
}from "../style"

function Topic(){
    const homeState = useSelector((state)=>state.homeReducer);
    return(
        <div>
            <TopicWrapper>
                {homeState.topicList.map((item)=>
                    <TopicItem key={item.id}>
                        <img className="item-img" src={item.imgUrl} alt="hot topic"/>
                        {item.title}
                    </TopicItem>
                )}
                <MoreTopic href="/">更多热门专题<span className="iconfont">&#xe607;</span></MoreTopic>
            </TopicWrapper>
        </div>
    )
}

export default Topic;