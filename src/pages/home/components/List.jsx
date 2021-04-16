import React from "react";
import { Link } from "react-router-dom"

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
                <Link key={item.id} to='/detail' style={{textDecoration: 'none'}}>
                    <ListItem>
                        <img src={item.imgUrl} alt=""/>
                        <ListInfo>
                            <h3>{item.title}</h3>
                            <p>{item.abstract}</p>
                        </ListInfo>
                    </ListItem>
                </Link>
            )}
            <LoadMore onClick={getMoreList}>
                阅读更多
            </LoadMore>
        </div>
    )
}

export default List;