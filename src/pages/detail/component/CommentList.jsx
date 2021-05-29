import React from "react";
import {
    AiFillLike,
} from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";

import {
    CommentListHeader,
    AuthorOnly,
    TimeOrder,
    CommentListContainer,
    CommentInfo,
    CommentButton
} from "../style";

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
                <CommentListContainer key={eachComment.id}>
                    <img
                        src={eachComment.userInfo.imgUrl}
                        alt="avatar"
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "1px solid #eee"
                        }}
                    />
                    <CommentInfo>
                        <p className="name">{eachComment.userInfo.name}</p>
                        <div className="info">
                            <span>{eachComment.id}楼 </span>
                            <time dateTime={eachComment.time}>
                                {eachComment.time}
                            </time>
                        </div>
                        <p className="content">{eachComment.content}</p>
                        <div className="operation">
                            <div>
                                <CommentButton className="left"><AiFillLike style={{marginRight: "2px"}}/> 赞</CommentButton>
                                <CommentButton className="left"><FaCommentAlt style={{marginRight: "2px"}}/>回复</CommentButton>
                            </div>
                            <CommentButton className="right"><RiAlarmWarningFill style={{marginRight: "2px"}}/>举报</CommentButton>
                        </div>
                    </CommentInfo>
                </CommentListContainer>
            ))}
        </div>
    );
}

export default CommentList;
