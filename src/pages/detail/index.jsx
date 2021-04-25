import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { actions } from "./store";
import { debounce } from "../../util/utils"

import {
  DetailWrapper,
  Main,
  BlogWrapper,
  Header,
  Content,
  CommentWrapper,
  SideWrapper,
  Footer,
  FooterCompose,
} from "./style";
import {
    BackTop,
    BackDescribe,
}from "../home/style";

function Detail() {
  const detailState = useSelector((state) => state.detailReducer);
  const dispatch = useDispatch();

  const [mouseInState, setMouseInState] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const handleOnMouseEnter = () => {
    setMouseInState(true);
  };

  const handleOnMouseLeave = () => {
    setMouseInState(false);
  };

  const changeScrollTopShow = () => {
    if (document.documentElement.scrollTop > 400) {
      // scroll down 400, show the backtop button
      dispatch(actions.toggleTopShowAction(true));
    } else {
      dispatch(actions.toggleTopShowAction(false));
    }
  };

  const debounceChangeScrollTopShow = debounce(changeScrollTopShow, 100);

  const bindEvents = () => {
    // listening to some events
    window.addEventListener("scroll", debounceChangeScrollTopShow);
  };

  useEffect(() => {
    dispatch(actions.getDetailAction());
    bindEvents();
  });


  return (
    <DetailWrapper>
      <Main>
        <BlogWrapper>
          <Header>{detailState.title}</Header>
          <Content
            dangerouslySetInnerHTML={{ __html: detailState.content }}
          ></Content>
        </BlogWrapper>
        <CommentWrapper>
            <p>comment~</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
        </CommentWrapper>
      </Main>
      <SideWrapper>writer information</SideWrapper>
      <Footer>
        <FooterCompose type="text" placeholder="写下你的评论" />
      </Footer>
      {detailState.showScroll && (
        <div>
          <BackTop
            onClick={handleScrollTop}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <span className="iconfont">&#xe633;</span>
          </BackTop>
          <CSSTransition
            in={mouseInState}
            appear={false}
            unmountOnExit
            timeout={200}
            classNames="fade"
          >
            <BackDescribe>回到顶部</BackDescribe>
          </CSSTransition>
        </div>
      )}
    </DetailWrapper>
  );
}

export default Detail;
