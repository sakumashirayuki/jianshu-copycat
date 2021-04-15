import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "./store"
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from "./style";

import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Download from "./components/Download";
import Writer from "./components/Writer";

function Home() {
    const dispatch = useDispatch();

    const homeState = useSelector((state) => state.homeReducer);

    useEffect(() => {
        dispatch(actions.getHomeDataAction());
        bindEvents();
        return function cleanup() {
            window.removeEventListener('scroll', changeScrollTopShow); // remove the listener when clean up the component
        }
    }, [])

    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    }

    const changeScrollTopShow = () => {
        if(document.documentElement.scrollTop > 400){ // scroll down 400, show the backtop button
            dispatch(actions.toggleTopShowAction(true));
        }else{
            dispatch(actions.toggleTopShowAction(false));
        }
    }

    const bindEvents = () => { // listening to some events
        window.addEventListener('scroll', changeScrollTopShow);
    }

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
            {homeState.showScroll && <BackTop onClick={handleScrollTop}><span className="iconfont">&#xe633;</span></BackTop>}
        </HomeWrapper>
    )
}

export default Home;