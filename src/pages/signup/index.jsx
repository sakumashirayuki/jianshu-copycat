import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { 
    SignupWrapper,
    SignupContent,
    Title,
    SignupHead,
    Input,
    Button
 }from "./style"
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
                    <Input type="text" placeholder="你的昵称" className="top" onChange={e=>setAccount(e.target.value)}/>
                    <Input type="text" placeholder="手机号" className="middle" onChange={e=>setAccount(e.target.value)}/>
                    <Input type="password" placeholder="设置密码" className="bottom" onChange={e=>setPassword(e.target.value)}/>
                    <Button>注册</Button>
                </SignupContent>
            </SignupWrapper>
        );
    }else{
        return(<Redirect to='/'/>);
    }

}

export default Signup;