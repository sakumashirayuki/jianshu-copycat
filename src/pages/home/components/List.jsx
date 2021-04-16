import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    const initLoadState = new Array(homeState.articleList.length).fill(false);
    for(let i = 0; i < 6; i++){
        initLoadState[i] = true;
    }
    const [loadState, setLoadState] = useState(initLoadState);

    const getMoreList = ()=>{
        dispatch(actions.getMoreList());
        setLoadState((prev)=>{
            const newState = [...prev];
            for(let i = 8; i < 12; i++){
                newState[i] = true;
            }
            return newState;
        });
    }

    const handleScrollChange = ()=>{
        const curArticle = Math.floor(document.documentElement.scrollTop / 143) + 6;
        if(!loadState[curArticle]&&curArticle<homeState.articleList.length){ // false, not load
            setLoadState((prev)=>{
                const newState = [...prev];
                newState[curArticle] = true;
                return newState;
            })
        }
    }

    const bindEvents = () => { // listening to some events
        window.addEventListener('scroll', handleScrollChange);
        return function cleanup() {
            window.removeEventListener('scroll', handleScrollChange);
        }
    }

    useEffect(()=>{
        bindEvents();
        // remove the eventlistener
    });
    return (
        <div>
            {homeState.articleList.map((item, index)=>
                loadState[index]&&
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