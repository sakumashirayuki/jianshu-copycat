import styled from "styled-components";
import logoPic from "../../statics/logo.png";

// now add or delete position: relative not affecting
export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    font-weight: 500;
`;

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 58px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 945px;
    height: 100%;
    margin: 0 auto;
    @media (max-width: 1280px){
        width: 800px;
    }
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333333;
    &.active{
        color: #ea6f5a;
    }
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
`
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        color: #333333;
        &.focused{
            background-color: #777777;
            color: white;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 240px;
    height: 38px;
    margin-top: 9px;
    margin-left: 15px;
    padding: 0 40px 0 20px;
    border: none;
    border-radius: 19px;
    box-sizing: border-box;
    font-size: 14px;
    color: inherit;
    background-color: #EEEEEE;
    &::placeholder{
        color: #999999;
    }
    &:focus{
        outline: none;
    }
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 320px;
    }
    &.slide-enter-done{
        width: 320px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 240px;
    } 
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 15px;
    top: 60px;
    width: 250px;
    padding: 0 20px;
    
    border-radius: 4px;
    box-shadow: 0 0 8px rgb(0 0 0 / 20%);
    background: white;
    &:after{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
    }
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
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

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    font-size: 12px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    &.reg{
        color: #ea6f5a;
        width: 80px;
    }
    &.writting{
        color: #ffffff;
        background-color: #ea6f5a;
        width: 100px;
    }
    float: right;
    margin-top: 9px;
    margin-right: 15px;
    padding: 6px 12px;
    height: 38px;
    line-height: 24px;
    border-radius: 19px;
    border: 1px solid #ea6f5a;
    box-sizing: border-box;
    font-size: 15px;
    text-align: center;
`