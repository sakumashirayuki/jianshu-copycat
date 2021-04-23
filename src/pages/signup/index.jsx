import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { 
    SignupWrapper,
    SignupContent,
    Title,
    SignupHead,
    InputWrapper,
    Input,
    Button
 }from "./style"
import {
    MoreOption,
    OtherAccount
}from "../login/style"
//  import { actions } from "./store";

function Signup(){
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    
    // const dispatch = useDispatch();
    const loginState = useSelector((state) => state.loginReducer);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(actions.loginAction(account, password));
    // }
    
    if(!loginState.login){
        return(
            <SignupWrapper>
                <SignupContent>
                    <Title>
                        <Link to="/login" style={{textDecoration: 'none', color: 'inherit'}}><SignupHead>登录</SignupHead></Link>
                        <SignupHead><b>·</b></SignupHead>
                        <a href="" style={{textDecoration: 'none'}}><SignupHead className='current'>注册</SignupHead></a>
                    </Title>
                    <InputWrapper>
                        <Input type="text" placeholder="你的昵称" className="top" onChange={e=>setAccount(e.target.value)}/>
                        <span className="iconfont">&#xe61d;</span>
                    </InputWrapper>
                    <InputWrapper>
                        <Input type="text" placeholder="手机号" className="middle" onChange={e=>setAccount(e.target.value)}/>
                        <span className="iconfont">&#xe621;</span>
                    </InputWrapper>
                    <InputWrapper>
                        <Input type="password" placeholder="设置密码" className="bottom" onChange={e=>setPassword(e.target.value)}/>
                        <span className="iconfont">&#xe60e;</span>
                    </InputWrapper>
                    <Button>注册</Button>
                    <MoreOption>
                        <h6>社交帐号直接注册</h6>
                        <OtherAccount ><span className="iconfont wechat">&#xe665;</span></OtherAccount>
                        <OtherAccount ><span className="iconfont qq">&#xe600;</span></OtherAccount>
                    </MoreOption>

                </SignupContent>
            </SignupWrapper>
        );
    }else{
        return(<Redirect to='/'/>);
    }

}

export default Signup;