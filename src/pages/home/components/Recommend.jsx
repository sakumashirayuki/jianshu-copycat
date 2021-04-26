import React from "react";
import { useSelector } from "react-redux"

import {
    BoardContainer,  
    BoardItem 
} from "../style"

function Recommend(){
    const homeState = useSelector((state)=>state.homeReducer);
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