import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { 
    LoginWrapper,
    LoginContent,
    Title,
    LoginHead,
    Input,
    Remember,
    Forgot,
    Button,
    MoreOption,
    OtherAccount
 }from "./style"

 import {
    InputWrapper
 }from "../signup/style"

 import { actions } from "./store";

function Login(){
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.loginReducer);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.loginAction(account, password, loginState.isRemember));
    }

    const handleCheckbox = (e) => {
        dispatch(actions.changeRememberAction());
    }

    if(!loginState.login){
        return(
            <LoginWrapper>
                <LoginContent>
                    <Title>
                        <a href="/login" style={{textDecoration: 'none'}}><LoginHead className='current'>登录</LoginHead></a>
                        <LoginHead><b>·</b></LoginHead>
                        <Link to="/signup" style={{textDecoration: 'none', color: 'inherit'}}><LoginHead >注册</LoginHead></Link>
                    </Title>
                    <InputWrapper>
                        <Input type="text" placeholder="手机号或邮箱" className="email_tel" onChange={e=>setAccount(e.target.value)}/>
                        <span className="iconfont">&#xe61d;</span>
                    </InputWrapper>
                    <InputWrapper>
                        <Input type="password" className="password" onChange={e=>setPassword(e.target.value)}/>
                        <span className="iconfont">&#xe60e;</span>
                    </InputWrapper>
                    <div style={{ display: "flow-root" }}>
                        <Remember>
                            <input type="checkbox" value="" checked={loginState.isRemember} onChange={e=>handleCheckbox(e)}/>
                            <span>记住我</span>
                        </Remember>
                        <Forgot>
                            <a href="">登录遇到问题</a>
                        </Forgot>
                    </div>
                    <Button onClick={handleSubmit}>登录</Button>
                    <MoreOption>
                        <h6>社交帐号登录</h6>
                        <OtherAccount ><span className="iconfont weibo">&#xe641;</span></OtherAccount>
                        <OtherAccount ><span className="iconfont wechat">&#xe665;</span></OtherAccount>
                        <OtherAccount ><span className="iconfont qq">&#xe600;</span></OtherAccount>
                    </MoreOption>
                </LoginContent>
            </LoginWrapper>
        );
    }else{
        return(<Redirect to='/'/>);
    }

}

export default Login;