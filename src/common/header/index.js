import React from "react"
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from "./style"

function Header(){
    return (
    <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">Aa</NavItem>
            <NavSearch />
            <Addition>
                <Button className="writting">写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </Nav>
    </HeaderWrapper>);
}
export default Header;