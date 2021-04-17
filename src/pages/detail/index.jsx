import React from "react";
import { useSelector } from "react-redux";

import { 
    DetailWrapper,
    BlogWrapper,
    Header,
    Content,
    SideWrapper
 } from "./style"

function Detail(){
    const detailState = useSelector(state=>state.detailReducer);
    return(
        <DetailWrapper>
            <BlogWrapper>
                <Header>
                    {detailState.title}
                </Header>
                <Content>
                    {detailState.content}
                </Content>
            </BlogWrapper>
            <SideWrapper>writer information</SideWrapper>
        </DetailWrapper>
    )
}

export default Detail;