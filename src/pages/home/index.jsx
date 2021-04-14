import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { actions } from "./store"
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from "./style";

import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Download from "./components/Download";
import Writer from "./components/Writer";

function Home(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actions.getHomeDataAction());
    }, [])
    return(
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
        </HomeWrapper>
    )
}

export default Home;