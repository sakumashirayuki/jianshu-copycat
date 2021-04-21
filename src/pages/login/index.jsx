import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { 
    LoginWrapper,
    LoginContent,
    Title,
    LoginHead,
    Input,
    Button
 }from "./style"
 import { actions } from "./store";

function Login(){
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.loginReducer);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.loginAction(account, password));
    }
    if(!loginState.login){
        return(
            <LoginWrapper>
                <LoginContent>
                    <Title>
                        <a href="" style={{textDecoration: 'none'}}><LoginHead className='current'>登录</LoginHead></a>
                        <LoginHead><b>·</b></LoginHead>
                        <Link to="/signup" style={{textDecoration: 'none', color: 'inherit'}}><LoginHead >注册</LoginHead></Link>
                    </Title>
                    <Input type="text" placeholder="手机号或邮箱" className="email_tel" onChange={e=>setAccount(e.target.value)}/>
                    <Input type="password" className="password" onChange={e=>setPassword(e.target.value)}/>
                    <Button onClick={handleSubmit}>登录</Button>
                </LoginContent>
            </LoginWrapper>
        );
    }else{
        return(<Redirect to='/'/>);
    }

}

export default Login;