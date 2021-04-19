import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { 
    LoginWrapper,
    LoginContent,
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