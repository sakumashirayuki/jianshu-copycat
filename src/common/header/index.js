import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

import ListArea from "./component/ListArea";

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

function Header() {
  const headerState = useSelector((state) => state.headerReducer);
  const loginState = useSelector((state) => state.loginReducer);

  const dispatch = useDispatch();

  const handleOnFocus = function () {
    dispatch(actions.searchFocusAction());
  };
  const handleOnBlur = function () {
    dispatch(actions.searchBlurAction());
  };

  const handleOnLogout = function () {
    dispatch(loginActions.logoutAction());
  }

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <Nav>
        <NavItem className="left active">
          <span className="iconfont">&#xe625;</span>首页
        </NavItem>
        <NavItem className="left">
          <span className="iconfont">&#xe621;</span>下载App
        </NavItem>
        {loginState.login ? (
          <NavItem className="right" onClick={handleOnLogout}>退出</NavItem>
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
            <NavSearch onFocus={handleOnFocus} onBlur={handleOnBlur} />
          </CSSTransition>
          <span
            className={
              headerState.focused ? "focused iconfont zoom" : "iconfont zoom"
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
            <Button className="writting">
              <span className="iconfont">&#xe61c;</span> 写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  );
}
export default Header;
