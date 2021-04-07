import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"

import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, Addition, Button } from "./style"

function Header(){
    const [focused, setFocused] = useState(false);

    const handleOnFocus = function(){
        setFocused(true);
    }
    const handleOnBlur = function(){
        setFocused(false);
    }

    return (
    <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
            <NavItem className="left active"><span className="iconfont">&#xe625;</span>首页</NavItem>
            <NavItem className="left"><span className="iconfont">&#xe621;</span>下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
            <SearchWrapper>
                <CSSTransition
                    in={focused}
                    timeout={300}
                    classNames="slide" 
                >
                    <NavSearch onFocus={handleOnFocus} onBlur={handleOnBlur}/>
                </CSSTransition>
                <span className={ focused ? 'focused iconfont' : 'iconfont' }>&#xe637;</span>
            </SearchWrapper>
            <Addition>
                <Button className="writting"><span className="iconfont">&#xe61c;</span> 写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </Nav>
    </HeaderWrapper>);
}
export default Header;