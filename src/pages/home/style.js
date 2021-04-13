import styled from "styled-components"

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    margin-top: 30px;
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    padding: 0 0 -10px 0;
    display: flex
    flex-wrap: wrap;
    border-bottom: 1px solid #f0f0f0;
`

export const TopicItem = styled.div`
    background: #f7f7f7;
    height: 32px;
    display: inline-block;
    padding-right: 10px;
    margin-right: 18px;
    margin-bottom: 18px;
    line-height: 32px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .item-img{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const MoreTopic = styled.a`
    margin-left: 18px;
    color: #999999;
    font-size: 12px;
    text-decoration: none;
    .iconfont{
        font-size: inherit;
    }
`
// for List 
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    img{
        display: block;
        float: right;
        width: 150;
        height: 100px;
        border-radius: 2px;
        border: 1px solid #f0f0f0;
        margin-left: 10px;
    }
`

export const ListInfo = styled.div`
    float: left
    width: 458px;
    h3{
        line-height: 27px;
        font-size: 18px;
        color: #333;
    }
    p{
        font-size: 13px;
        line-height: 18px;
        color: #999;
    }
`
// for recommend
export const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`

export const BoardItem = styled.a`
    img{
        width: 280px;
        height: 50px;
    }
`