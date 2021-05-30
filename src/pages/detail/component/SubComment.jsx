import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from 'react-transition-group';

import { FaCommentAlt } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";

import { actions } from "../store";

import BasicTextArea from "./BasicTextArea";

import {CommentInfo, CommentButton } from "../style";

import slideYTransition from "../../../transitions/slideY.module.css";

function SubComment() {
    const [mouseIn, setMouseIn] = useState(false);
    const [showTextarea, setShowTextarea] = useState(false);

    const dispatch = useDispatch();

    const handleOnClickReport = () => {
        dispatch(actions.openReportAction());
    };

    const hideReplyTextarea = () => {
        setShowTextarea(false);
    }

    return (
        <CommentInfo className="comment-info">
            <p className="name">杭公子</p>
            <div className="info">
                <time dateTime="03.30 10:01">
                    03.30 10:01
                </time>
            </div>
            <p className="content">嗯嗯，是的</p>
            <div
                className="operation"
            >
                <div>
                    <CommentButton
                        className="left"
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
            <CSSTransition
                in={showTextarea}
                timeout={200}
                classNames={slideYTransition}
                unmountOnExit
            >
                <BasicTextArea handleOnclose={hideReplyTextarea} />
            </CSSTransition>
        </CommentInfo>
    );
}

export default SubComment;
