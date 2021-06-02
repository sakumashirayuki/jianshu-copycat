import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";

import ListArea from "./component/ListArea";

import DetailHeader from "../../pages/detail/component/DetailHeader";

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    Addition,
    Button,
} from "./style";

import { actions } from "./store";
import { actions as loginActions } from "../../pages/login/store";
import { actions as userActions } from "../../pages/user/store";

function Header() {
    const headerState = useSelector((state) => state.headerReducer);
    const loginState = useSelector((state) => state.loginReducer);
    const userState = useSelector((state) => state.userReducer);
    const detailState = useSelector((state) => state.detailReducer);

    const dispatch = useDispatch();

    const handleOnFocus = function () {
        dispatch(actions.searchFocusAction());
    };
    const handleOnBlur = function () {
        dispatch(actions.searchBlurAction());
    };

    const handleOnLogout = function () {
        dispatch(loginActions.logoutAction());
    };

    useEffect(() => {
        if (localStorage.getItem("userData")) {
            // already logged in
            dispatch(loginActions.changeLoginAction());
        }
    }, []);

    useEffect(() => {
        // if login, fetch the user avatar
        if (loginState.login) {
            dispatch(userActions.fetchUserinfoAction());
        }
    }, [loginState.login]);

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/user">
                    我的主页
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    收藏的文章
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    喜欢的文章
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    易购内容
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    我的钱包
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    设置
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    帮助与反馈
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    退出
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        detailState.titleHeader ? <DetailHeader /> : (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <Link to="/">
                        <NavItem className="left active">
                            <span className="iconfont">&#xe625;</span>首页
                        </NavItem>
                    </Link>
                    <NavItem className="left">
                        <span className="iconfont">&#xe621;</span>下载App
                    </NavItem>
                    {loginState.login ? (
                        <NavItem className="right" onClick={handleOnLogout}>
                            退出
                        </NavItem>
                    ) : (
                        <Link to="/login">
                            <NavItem className="right">登录</NavItem>
                        </Link>
                    )}
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={headerState.focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={handleOnFocus}
                                onBlur={handleOnBlur}
                            />
                        </CSSTransition>
                        <span
                            className={
                                headerState.focused
                                    ? "focused iconfont zoom"
                                    : "iconfont zoom"
                            }
                        >
                            &#xe637;
                        </span>
                        {(headerState.focused || headerState.mouseIn) && (
                            <ListArea page={headerState.page} />
                        )}
                    </SearchWrapper>
                    <Addition>
                        <Link to="/write">
                            <Button className="solid right" style={{minWidth: "100px"}}>
                                <span className="iconfont">&#xe61c;</span> 写文章
                            </Button>
                        </Link>
                        {loginState.login ? (
                        <div style={{float: "right", marginTop: "7px", marginRight: "15px"}}>
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <img
                                    src={userState.avatarUrl}
                                    alt=""
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                    }}
                                />
                            </Dropdown>
                        </div>
                        ) : (
                            <Link to="/signup">
                                <Button className="reg right">注册</Button>
                            </Link>
                        )}
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    );
}
export default Header;
