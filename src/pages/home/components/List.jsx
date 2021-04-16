import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
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
    const ListLoadingBlock = (props) => {
        return (<div style={{background: "#f1f4ff", height: props.height, width: props.width}}></div>);
    }
    return (
        <div>
            {homeState.articleList.map((item)=>
                <LazyLoad key={item.id} once placeholder={<ListLoadingBlock height='143px' width='625px'/>}>
                    <Link to='/detail' style={{textDecoration: 'none'}}>
                        <ListItem>
                            <img src={item.imgUrl} alt=""/>
                            <ListInfo>
                                <h3>{item.title}</h3>
                                <p>{item.abstract}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                </LazyLoad>
            )}
            <LoadMore onClick={getMoreList}>
                阅读更多
            </LoadMore>
        </div>
    )
}

export default List;