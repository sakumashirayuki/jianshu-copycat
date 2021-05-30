import React, {useState} from "react";

import {
    AiFillLike,
} from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";

import {
    CommentListContainer,
    CommentInfo,
    CommentButton
}from "../style";

function CommentItem(props){
    const [mouseIn, setMouseIn] = useState(false);

    const handleOnMouseEnter = () => {
        setMouseIn(true);
    };

    const handleOnMouseLeave = () => {
        setMouseIn(false);
    };

    return (<CommentListContainer key={props.eachComment.id}>
        <img
            src={props.eachComment.userInfo.imgUrl}
            alt="avatar"
            style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid #eee"
            }}
        />
        <CommentInfo>
            <p className="name">{props.eachComment.userInfo.name}</p>
            <div className="info">
                <span>{props.eachComment.id}楼 </span>
                <time dateTime={props.eachComment.time}>
                    {props.eachComment.time}
                </time>
            </div>
            <p className="content">{props.eachComment.content}</p>
            <div className="operation" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                <div>
                    <CommentButton className="left orange"><AiFillLike style={{marginRight: "2px"}}/> 赞</CommentButton>
                    <CommentButton className="left"><FaCommentAlt style={{marginRight: "2px"}}/>回复</CommentButton>
                </div>
                <CommentButton className={`right ${!mouseIn && "hide"}`}><RiAlarmWarningFill style={{marginRight: "2px"}}/>举报</CommentButton>
            </div>
        </CommentInfo>
    </CommentListContainer>)
};

export default CommentItem;