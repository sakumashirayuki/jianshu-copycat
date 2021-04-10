import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  Button,
} from "./style";

import { actions } from "./store";

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </div>
      </SearchInfo>
    );
  } else return null;
};

function Header() {
  const headerState = useSelector((state) => state.headerReducer);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actions.getList());
  }, []);

  const handleOnFocus = function () {
    dispatch(actions.searchFocusAction());
  };
  const handleOnBlur = function () {
    dispatch(actions.searchBlurAction());
  };

  return (
    <HeaderWrapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">
          <span className="iconfont">&#xe625;</span>首页
        </NavItem>
        <NavItem className="left">
          <span className="iconfont">&#xe621;</span>下载App
        </NavItem>
        <NavItem className="right">登录</NavItem>
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
            className={headerState.focused ? "focused iconfont" : "iconfont"}
          >
            &#xe637;
          </span>
          {getListArea(headerState.focused)}
        </SearchWrapper>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe61c;</span> 写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  );
}
export default Header;
