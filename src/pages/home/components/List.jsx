import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
    ListItem,
    ListInfo,
    LoadMore
} from "../style";
import { actions } from "../store"

function List() {
    const homeState = useSelector((state)=>state.homeReducer);
    const dispatch  = useDispatch();
    const getMoreList = ()=>{
        dispatch(actions.getMoreList());
    }
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
            <LoadMore onClick={getMoreList}>
                阅读更多
            </LoadMore>
        </div>
    )
}

export default List;