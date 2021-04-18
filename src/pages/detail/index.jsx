import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store"

import { 
    DetailWrapper,
    BlogWrapper,
    Header,
    Content,
    SideWrapper
 } from "./style"

function Detail(){
    const detailState = useSelector(state=>state.detailReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actions.getDetailAction());
    });

    return(
        <DetailWrapper>
            <BlogWrapper>
                <Header>
                    {detailState.title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html: detailState.content}}>
                </Content>
            </BlogWrapper>
            <SideWrapper>writer information</SideWrapper>
        </DetailWrapper>
    )
}

export default Detail;