import styled from "styled-components";

export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #eee;
`;

export const LoginContent = styled.div`
    width: 400px;
    padding: 50px 50px 30px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    font-size: 14px;
`;

export const Title = styled.div`
    width: 100%;
    padding: 10px;
    margin-bottom: 50px;
    box-sizing: border-box;
    color: #969696;
    font-size: 18px;
    display: flex;
    justify-content: center;
`
export const LoginHead = styled.div`
    font-weight: 700;
    padding: 10px;
    box-sizing: border-box;
    &.current{
        border-bottom: 2px solid #ea6f5a;
        color: #ea6f5a;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 4px 12px 4px 35px;
    box-sizing: border-box;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    outline: none;
    &.mobile_tel{
        border-radius: 4px 4px 0 0;
    }
    &.password{
        border-radius: 0 0 4px 4px;
        border-top-width: 0;
    }
`

export const Remember = styled.div`
    margin: 15px 0;
    float: left;
    line-height: 1.42857;
`

export const Forgot = styled.div`
    margin: 15px 0;
    float: right;
    line-height: 1.42857;
    a{
        text-decoration: none;
        color: #999;
        &:hover{
            color: #333;
        }
    }
`

export const Button = styled.div`
    background: #3194d0;
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    box-sizing: border-box;
    font-size: 18px;
    border-radius: 25px;
    text-align: center;
    color: #fff;
    &:hover{
        background: #187cb7;
    }
`

export const MoreOption = styled.div`
    position: relative;
    text-align: center;
    margin-top: 50px;
    color: #b5b5b5;
    padding: 0 30px;
    h6{
        font-weight: 500;
        margin-bottom: 10px;
        &:before{
            content: "";
            border-top: 1px solid #b5b5b5;
            display: block;
            position: absolute;
            width: 60px;
            top: 5px;
        }
        &:after{
            content: "";
            border-top: 1px solid #b5b5b5;
            display: block;
            position: absolute;
            width: 60px;
            top: 5px;
            right: 30px;
        }
    }
`

export const OtherAccount = styled.li`
    display: inline-block;
    height: 50px;
    line-height: 50px;
    margin: 0 20px;
    .iconfont{
        font-size: 28px;
        &.wechat{
            color: #00bb29;
        }
        &.qq{
            color: #498ad5;
        }
        &.weibo{
            color: #e05244;
        }
    }
`
