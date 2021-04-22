import styled from "styled-components";

export const SignupWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #eee;
`;

export const SignupContent = styled.div`
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
export const SignupHead = styled.div`
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
    &.top{
        border-radius: 4px 4px 0 0;
    }
    &.middle{
        border-top-width: 0;
    }
    &.bottom{
        border-radius: 0 0 4px 4px;
        border-top-width: 0;
    }
`

export const Button = styled.div`
    background: #3db922;;
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    box-sizing: border-box;
    font-size: 18px;
    border-radius: 25px;
    text-align: center;
    color: #fff;
`
