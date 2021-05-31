import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { FaCommentAlt } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";

import { actions } from "../store";

import { CommentInfo, CommentButton, BreakLine } from "../style";

function SubComment(props) {
    const [mouseIn, setMouseIn] = useState(false);
    const [showTextarea, setShowTextarea] = useState(false);

    const { userInfo, time, content } = props.comment;

    const dispatch = useDispatch();

    const handleOnClickReport = () => {
        dispatch(actions.openReportAction());
    };

    const handleOnClickReply = () => {
        props.setShowTextarea();
    };

    return (
        <CommentInfo>
            <div style={{display: "flex"}}>
                <img src={userInfo.imgUrl} 
                    alt="avatar"
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "1px solid #eee",
                        marginRight: "10px"
                    }} />
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <p className="name">{userInfo.name}</p>
                    <div className="info">
                        <time dateTime={time}>
                            {time}
                        </time>
                    </div>
                </div>
            </div>
            <p className="content">{content}</p>
            <div
                className="operation"
            >
                <div>
                    <CommentButton
                        className="left"
                        onClick={handleOnClickReply}
                    >
                        <FaCommentAlt style={{ marginRight: "2px" }} />
                        回复
                    </CommentButton>
                </div>
                <CommentButton
                    className={`right ${!mouseIn && "hide"}`}
                    onClick={handleOnClickReport}
                >
                    <RiAlarmWarningFill style={{ marginRight: "2px" }} />
                    举报
                </CommentButton>
            </div>
            <BreakLine />
            <div className="operation">
                <CommentButton className="left" onClick={handleOnClickReply}>
                    <FiEdit3 style={{ marginRight: "2px" }}/>
                    添加新评论
                </CommentButton>
            </div>
        </CommentInfo>
    );
}

export default SubComment;
