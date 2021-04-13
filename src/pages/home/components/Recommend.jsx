import React from "react";

import {
    BoardContainer,  
    BoardItem 
} from "../style"

function Recommend(){
    return(
        <BoardContainer>
            <BoardItem>
                <img src="https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png" alt=""/>
            </BoardItem>
            <BoardItem>
                <img src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt=""/>
            </BoardItem>
            <BoardItem>
                <img src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt=""/>
            </BoardItem>
            <BoardItem>
                <img src="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt=""/>
            </BoardItem>
        </BoardContainer>
    )
}

export default Recommend;