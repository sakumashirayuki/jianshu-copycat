import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";  

import {
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
} from "../style";
import { actions } from "../store"

function ListArea() {
    const headerState = useSelector((state) => state.headerReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getList());
    }, []);

    return (
        <SearchInfo>
            <SearchInfoTitle>
                热门搜索
        <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <div>
                {headerState.list.map((item)=><SearchInfoItem key={item}>{item}</SearchInfoItem>)}
            </div>
        </SearchInfo>
    );
};

export default ListArea;