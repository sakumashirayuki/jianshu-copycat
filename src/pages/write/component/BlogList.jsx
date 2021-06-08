import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { IoAddCircle } from "react-icons/io5";
import { AiFillFile, AiFillSetting } from "react-icons/ai";

import { actions } from "../store";

import {
    ListWrapper,
    BlogItem,
    LeftIcon,
    RightIcon,
    CreateNew,
} from "../style";

function BlogList() {
    const writeState = useSelector((state) => state.writeReducer);

    const dispatch = useDispatch();

    const handleOnClickBlogItem = (index) => {
        dispatch(actions.selectBlogAction(index));
    }

    return (
        <ListWrapper>
            <div
                style={{
                    lineHeight: "20px",
                    fontSize: "15px",
                    padding: "20px 0 20px 25px",
                    cursor: "pointer",
                    color: "#595959",
                }}
                className="bottom-line"
            >
                <IoAddCircle />
                <span>新建文章</span>
            </div>
            <ul>
                {writeState.catalogList.length &&
                    writeState.catalogList[writeState.selectedCatId].list.map(
                        (item, index) => (
                            <BlogItem
                                key={item.id}
                                className={`bottom-line ${
                                    index === writeState.selectedBlogId &&
                                    "active"
                                }`}
                                onClick={() => handleOnClickBlogItem(index)}
                            >
                                <LeftIcon>
                                    <AiFillFile />
                                </LeftIcon>
                                <RightIcon className="setting-icon">
                                    <AiFillSetting />
                                </RightIcon>
                                <span className="title">{item.title}</span>
                                <span>{item.content.length <= 13 ? item.content : item.content.substring(0, 14) + "..."}</span>
                            </BlogItem>
                        )
                    )}
            </ul>
            <CreateNew>
                <span
                    className="iconfont"
                    style={{ marginRight: "5px", fontSize: "inherit" }}
                >
                    &#xe60d;
                </span>
                <span>在下方新建文章</span>
            </CreateNew>
        </ListWrapper>
    );
}

export default BlogList;
