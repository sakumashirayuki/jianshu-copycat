import React from "react";

import {
    CommentListHeader,
    AuthorOnly,
    TimeOrder,
} from "../style";

import CommentItem from "./CommentItem";

function CommentList(props) {

    return (
        <div>
            <CommentListHeader>
                <div>
                    <span style={{ fontSize: "18px" }}>全部评论</span>
                    <span style={{ fontSize: "14px", marginLeft: "6px" }}>
                        {props.comments.length}
                    </span>
                    <AuthorOnly>只看作者</AuthorOnly>
                </div>
                <div style={{ display: "flex" }}>
                    <TimeOrder>按时间倒序</TimeOrder>
                    <TimeOrder className="no-select">按时间正序</TimeOrder>
                </div>
            </CommentListHeader>
            {props.comments.map((eachComment) => (
                <CommentItem eachComment={eachComment}/>
            ))}
        </div>
    );
}

export default CommentList;
