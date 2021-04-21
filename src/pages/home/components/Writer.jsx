import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux"

import {
    WriterInfoTitle,
    WriterInfoSwitch,
    WriterItem,
    WriterDes,
    FindMore
} from "../style"
import { actions } from "../store"

function Writer(){
    const spinIcon = useRef(null);
    const homeState = useSelector((state)=>state.homeReducer);
    const dispatch = useDispatch();

    const handleChangePage = function () {
        let originAngle = spinIcon.current.style.transform.replace(/[^0-9]/ig, ''); // remove all that is not number
        originAngle = originAngle==='' ? 0 : parseInt(originAngle);
        spinIcon.current.style.transform = `rotate(${originAngle + 360}deg)`;
        dispatch(actions.changeWriterPageAction());
    };

    return(
        <div>
            <WriterInfoTitle>
                推荐作者
                <WriterInfoSwitch onClick={handleChangePage}>
                    <span className="iconfont spin" ref={spinIcon}>
                        &#xe851;
                    </span>
                    换一批
                </WriterInfoSwitch>
            </WriterInfoTitle>
            {homeState.writerList.slice((homeState.writerPage - 1) * 5, homeState.writerPage * 5).map((writer)=>
                <WriterItem key={writer.id}>
                    <img src={writer.imgUrl} alt="avatar"/>
                    <WriterDes>
                        <a href="/">{writer.name}</a>
                        <p>写了{writer.wordAmount}k字 · {writer.likes>=1000 ? `${writer.likes/1000}k` : writer.likes}喜欢</p>
                    </WriterDes>
                    <a href="/" className="follow">
                        <span className="iconfont">
                            &#xe60d;
                        </span>
                        关注
                    </a>
                </WriterItem>
            )}
            <FindMore>
                查看全部 <span className="iconfont">&#xe607;</span>
            </FindMore>
        </div>
    )
}

export default Writer;