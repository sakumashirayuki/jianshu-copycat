import React from "react";

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