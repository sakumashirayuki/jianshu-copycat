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
    padding: 50px 30px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    font-size: 14px;
`;

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
