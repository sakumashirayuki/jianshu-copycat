import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { actions } from "./store";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
  BackDescribe,
} from "./style";

import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Download from "./components/Download";
import Writer from "./components/Writer";

import { debounce } from "../../util/utils"

function Home() {
  const dispatch = useDispatch();

  const homeState = useSelector((state) => state.homeReducer);

  const [mouseInState, setMouseInState] = useState(false);

  useEffect(() => {
    dispatch(actions.getHomeDataAction());
    bindEvents();
    return function cleanup() {
      window.removeEventListener("scroll", changeScrollTopShow); // remove the listener when clean up the component
    };
  }, []);

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

  return (
    <HomeWrapper>
      <HomeLeft>
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <Download />
        <Writer />
      </HomeRight>
      {homeState.showScroll && (
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
            classNames="fade">
            <BackDescribe>回到顶部</BackDescribe>
          </CSSTransition>
        </div>
      )}
    </HomeWrapper>
  );
}

export default Home;
