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
    margin-bottom: 5px;
    img{
        width: 280px;
        height: 50px;
    }
`

// for writer
export const WriterInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const WriterInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    .spin{
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center; 
    }
`

export const WriterItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    img{
        float: left
        height: 46px;
        width: 46px;
        border-radius: 50%;
        border: 1px solid #ddd;
    }
    .follow{
        position: absolute;
        right: 0;
        top: 5px;
        font-size: 13px;
        color: #42c02e;
        text-decoration: none;
    }
    .iconfont{
        font-size: 10px;
    }
`
export const WriterDes = styled.div`
    margin-left: 10px;
    a{
        font-size: 14px;
        text-decoration: none;
        color: black;
    }
    p{
        font-size: 12px;
        color: #969696;
        margin-top: 10px;
    }
`

export const FindMore = styled.a`
    text-decoration: none;
    display: block;
    margin: 0 auto;
    padding: 7px 7px 7px 12px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    font-size: 13px;
    width: 259px;
    line-height: 19px;
    text-align: center;
    .iconfont{
        font-size: 10px;
    }
`