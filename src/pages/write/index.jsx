import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function Write(){
    const loginState = useSelector((state) => state.loginReducer);

    if(loginState.login){
        return(
            <div>写文章</div>
        );
    }else{
        return(<Redirect to='/login'/>);
    }
}

export default Write;