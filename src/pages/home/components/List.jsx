import React from "react";

import { useSelector } from "react-redux";

import {
    ListItem,
    ListInfo,
    LoadMore
} from "../style";

function List() {
    const homeState = useSelector((state)=>state.homeReducer);
    return (
        <div>
            {homeState.articleList.map((item)=>
                <ListItem key={item.id}>
                    <img src={item.imgUrl} alt=""/>
                    <ListInfo>
                        <h3>{item.title}</h3>
                        <p>{item.abstract}</p>
                    </ListInfo>
                </ListItem>
            )}
            <LoadMore>
                阅读更多
            </LoadMore>
        </div>
    )
}

export default List;