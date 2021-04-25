import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"

import {
    BoardContainer,  
    BoardItem 
} from "../style"

import { actions } from "../store"

function Recommend(){
    const homeState = useSelector((state)=>state.homeReducer);
    const dispatch  = useDispatch();
    useEffect(()=>{
        dispatch(actions.getRecommendImg());
    }, []);
    return(
        <BoardContainer>
            {homeState.recommendList.map((recommendItem)=>
            <BoardItem key={recommendItem.id}>
                <img src={recommendItem.imgUrl} alt="banner"/>
            </BoardItem>)}
        </BoardContainer>
    )
}

export default Recommend;