import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import { CSSTransition } from "react-transition-group";

import {
    AiFillLike,
    AiOutlineEllipsis,
} from "react-icons/ai";

import {
    FooterWrapper,
    FooterCompose,
    RoundButton
}from "../style";

function Footer(){
    const { SubMenu } = Menu;
    const [focus, setFocus] = useState(false);

    const menu = (
        <Menu>
            <SubMenu title="分享文章">
                <Menu.Item>分享到微信</Menu.Item>
                <Menu.Item>分享到微博</Menu.Item>
            </SubMenu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    收入专题
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    收藏文章
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    举报文章
                </a>
            </Menu.Item>
        </Menu>
    );

    const handleOnFocus = () => {
        setFocus(true);
    }

    return (                
    <FooterWrapper>
        <CSSTransition
            in={focus}
            timeout={300}
            classNames="slide"
        >
            <FooterCompose type="text" placeholder="写下你的评论" onFocus={handleOnFocus}/>
        </CSSTransition>
        <div>
            赞
        </div>
        <div>
            评论
        </div>
        <div>
            <Dropdown
                overlay={menu}
                placement="topCenter"
            >
                <RoundButton>
                    <AiOutlineEllipsis />
                </RoundButton>
            </Dropdown>
        </div>
    </FooterWrapper>)
};

export default Footer;