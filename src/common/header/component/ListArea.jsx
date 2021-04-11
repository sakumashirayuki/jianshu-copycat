import React, { useEffect, useRef } from "react";
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

  const spinIcon = useRef(null);

  useEffect(() => {
    if(!headerState.list.length){
      dispatch(actions.getList());
    }
  }, []);

  const handleOnMouseEnter = function () {
    dispatch(actions.mouseEnterAction());
  };

  const handleOnMouseLeave = function () {
    dispatch(actions.mouseLeaveAction());
  };

  const handleChangePage = function () {
    let originAngle = spinIcon.current.style.transform.replace(/[^0-9]/ig, ''); // remove all that is not number
    originAngle = originAngle==='' ? 0 : parseInt(originAngle);
    spinIcon.current.style.transform = `rotate(${originAngle + 360}deg)`;
    dispatch(actions.changePageAction());
  };

  return (
    <SearchInfo
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <SearchInfoTitle>
        热门搜索
        <SearchInfoSwitch onClick={handleChangePage}>
          <span className="iconfont spin" ref={spinIcon}>
            &#xe851;
          </span>
          换一批
        </SearchInfoSwitch>
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
