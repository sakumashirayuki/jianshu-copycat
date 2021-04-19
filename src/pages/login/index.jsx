import React from "react";

import { 
    LoginWrapper,
    LoginContent,
    Input,
    Button
 }from "./style"

function Login(){
    console.log("here!");
    return(
        <LoginWrapper>
            <LoginContent>
                <Input type="text" placeholder="手机号或邮箱" className="email_tel"/>
                <Input type="password" className="password"/>
                <Button>登录</Button>
            </LoginContent>
        </LoginWrapper>
    );
}

export default Login;