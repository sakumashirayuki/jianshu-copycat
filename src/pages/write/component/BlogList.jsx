import React from "react";
import { useSelector } from "react-redux";

import { IoAddCircle } from "react-icons/io5";
import { AiFillFile } from "react-icons/ai";

import { ListWrapper, BlogItem, LeftIcon, CreateNew } from "../style";

function BlogList() {
    const writeState = useSelector((state) => state.writeReducer);
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
                        (item) => (
                            <BlogItem key={item.id} className="bottom-line">
                                <LeftIcon>
                                    <AiFillFile />
                                </LeftIcon>
                                <span className="title">{item.title}</span>
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
                <span>
                    在下方新建文章
                </span>
            </CreateNew>
        </ListWrapper>
    );
}

export default BlogList;
