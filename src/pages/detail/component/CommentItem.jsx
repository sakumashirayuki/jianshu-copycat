import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";

import BasicTextArea from "./BasicTextArea";
import SubComment from "./SubComment";

import {
    CommentListContainer,
    CommentInfo,
    CommentButton,
    BreakLine,
} from "../style";

import { actions } from "../store";

import slideYTransition from "../../../transitions/slideY.module.css";

// import "../../../css/common.css"

function CommentItem(props) {
    const [mouseIn, setMouseIn] = useState(false);
    const [showTextarea, setShowTextarea] = useState(false);
    const [replyTarget, setReplyTarget] = useState("");

    const dispatch = useDispatch();

    const handleOnMouseEnter = () => {
        setMouseIn(true);
    };

    const handleOnMouseLeave = () => {
        setMouseIn(false);
    };

    const handleOnClickReport = () => {
        dispatch(actions.openReportAction());
    };

    const handleOnClickReply = () => {
        setShowTextarea(true);
    };

    const hideReplyTextarea = () => {
        setShowTextarea(false);
        setReplyTarget("");
    };

    const handleOnGetReplyTarget = (targetName) => {
        setReplyTarget(targetName);
    }

    return (
        <CommentListContainer key={props.eachComment.id}>
            <div style={{ display: "flex" }}>
                <img
                    src={props.eachComment.userInfo.imgUrl}
                    alt="avatar"
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "1px solid #eee",
                    }}
                />
                <CommentInfo className="comment-info">
                    <p className="name">{props.eachComment.userInfo.name}</p>
                    <div className="info">
                        <span>{props.eachComment.id}??? </span>
                        <time dateTime={props.eachComment.time}>
                            {props.eachComment.time}
                        </time>
                    </div>
                    <p className="content">{props.eachComment.content}</p>
                    <div
                        className="operation"
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                    >
                        <div>
                            <CommentButton className="left orange">
                                <AiFillLike style={{ marginRight: "2px" }} /> ???
                            </CommentButton>
                            <CommentButton
                                className="left"
                                onClick={handleOnClickReply}
                            >
                                <FaCommentAlt style={{ marginRight: "2px" }} />
                                ??????
                            </CommentButton>
                        </div>
                        <CommentButton
                            className={`right ${!mouseIn && "hide"}`}
                            onClick={handleOnClickReport}
                        >
                            <RiAlarmWarningFill
                                style={{ marginRight: "2px" }}
                            />
                            ??????
                        </CommentButton>
                    </div>
                    <BreakLine
                        className={`${
                            props.eachComment.subComments.length === 0 &&
                            "break-line"
                        }`}
                    />
                    {props.eachComment.subComments.map((eachSubCom) => (
                        <SubComment
                            key={eachSubCom.id}
                            comment={eachSubCom}
                            setShowTextarea={handleOnClickReply}
                            getReplyTarget={handleOnGetReplyTarget}
                        />
                    ))}
                    <CSSTransition
                        in={showTextarea}
                        timeout={200}
                        classNames={slideYTransition}
                        unmountOnExit
                    >
                        <BasicTextArea handleOnclose={hideReplyTextarea} initValue={replyTarget}/>
                    </CSSTransition>
                </CommentInfo>
            </div>
        </CommentListContainer>
    );
}

export default CommentItem;
