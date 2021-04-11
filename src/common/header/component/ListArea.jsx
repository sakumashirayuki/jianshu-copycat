import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
} from "../style";
import { actions } from "../store";

function ListArea(props) {
  const headerState = useSelector((state) => state.headerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getList());
  }, []);

  const handleOnMouseEnter = function () {
    dispatch(actions.mouseEnterAction());
  };

  const handleOnMouseLeave = function () {
    dispatch(actions.mouseLeaveAction());
  };

  const handleChangePage = function () {
    dispatch(actions.changePageAction());
  }

  return (
    <SearchInfo
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <SearchInfoTitle>
        热门搜索
        <SearchInfoSwitch onClick={handleChangePage}>换一批</SearchInfoSwitch>
      </SearchInfoTitle>
      <div>
        {headerState.list
          .slice((props.page - 1) * 8, props.page * 8)
          .map((item) => (
            <SearchInfoItem key={item}>{item}</SearchInfoItem>
          ))}
      </div>
    </SearchInfo>
  );
}

export default ListArea;
