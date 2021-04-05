import React from "react"
import { HeaderWrapper, Logo, Nav } from "./style"

function Header(){
    return (
    <HeaderWrapper>
        <Logo href='/'/>
        <Nav />
    </HeaderWrapper>);
}
export default Header;