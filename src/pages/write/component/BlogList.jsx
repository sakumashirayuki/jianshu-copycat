import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { IoAddCircle } from "react-icons/io5";
import { AiFillFile, AiFillSetting } from "react-icons/ai";

import { actions } from "../store";

import {
    ListWrapper,
    CreateTop,
    BlogItem,
    LeftIcon,
    RightIcon,
    CreateNew,
} from "../style";

const darkThemeBackground = {
    main: "#3d3d3d",
    line: "#2e2e2e",
    fontColor: "#b3b3b3"
};

const darkThemeItem = {
    main: "#2e2e2e"
}

function BlogList() {
    const writeState = useSelector((state) => state.writeReducer);

    const dispatch = useDispatch();

    const handleOnClickBlogItem = (index) => {
        dispatch(actions.selectBlogAction(index));
    }

    return (
        <ListWrapper theme={writeState.theme==="dark"&&darkThemeBackground}>
            <CreateTop className="bottom-line">
                <IoAddCircle />
                <span>新建文章</span>
            </CreateTop>
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
                                theme={writeState.theme==="dark"&&darkThemeItem}
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
