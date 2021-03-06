import React, { useState, useRef, useEffect } from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { CSSTransition } from 'react-transition-group';

import { CommentWrapper, MainCommentCompose, CommentOption } from "../style";

import { Button } from "../../../common/header/style";

import CommentList from "./CommentList";

import { getPositionForTextArea } from "../../../util/textEditor";

function CommentSection(props) {
    const [showOption, setShowOption] = useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const [textContent, setTextContent] = useState("");

    const refPicker = useRef(null);
    const refPop = useRef(null);
    const refTextArea = useRef(null);

    const handleOnFocusText = () => {
        setShowOption(true);
    };

    const handleOnClickPicker = () => {
        setShowPicker(true);
    };

    const handleClickOutside = (event) => {
        if (
            refPicker.current &&
            !refPicker.current.contains(event.target) &&
            refPop.current &&
            !refPop.current.contains(event.target)
        ) {
            setShowPicker(false);
        }
    };

    const keydownHandler = (e) => {
        if(e.keyCode===13 && e.ctrlKey)
            handleSubmit();
    }

    const changeTextArea = (e) => {
        setTextContent(e.target.value);
    }

    const addEmoji = (emoji) => {
        const currenCursorPosition = getPositionForTextArea(refTextArea);
        setTextContent((prevContent)=>{
            return prevContent.substring(0, currenCursorPosition.start) + emoji.native + prevContent.substring(currenCursorPosition.end);
        });
    }

    const handleSubmit = () => {
        if(textContent !== "")
            console.log("submit!");
    }
    
    const handleOnCancel = () => {
        setShowOption(false);
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", keydownHandler);
        return () => {
            document.removeEventListener("keydown", keydownHandler);
        }
    });

    return (
        <CommentWrapper id="comments-section">
            <MainCommentCompose>
                <img
                    src={props.avatarUrl}
                    alt=""
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                    }}
                />
                <div style={{ width: "100%" }}>
                    <textarea
                        placeholder="??????????????????"
                        style={{
                            width: "100%",
                            height: "80px",
                            padding: "12px",
                            border: "transparent",
                            borderRadius: "5px",
                            backgroundColor: "#f2f2f2",
                            resize: "none",
                            outline: "none",
                        }}
                        onFocus={handleOnFocusText}
                        ref={refTextArea}
                        onChange={changeTextArea}
                        value={textContent}
                    ></textarea>
                    <CSSTransition
                        in={showOption}
                        timeout={200}
                        classNames="slideY"
                        unmountOnExit
                    >
                        <CommentOption>
                            <div
                                style={{ display: "flex", lineHeight: "29px" }}
                            >
                                <div
                                    ref={refPicker}
                                    style={{
                                        marginRight: "0.5rem",
                                        display: "flex",
                                        alignContent: "flex-end",
                                    }}
                                >
                                    <HiOutlineEmojiHappy
                                        style={{
                                            fontSize: "18px",
                                            lineHeight: "18px",
                                            margin: "auto",
                                        }}
                                        onClick={handleOnClickPicker}
                                    />
                                </div>
                                <p>Ctrl + Enter ??????</p>
                            </div>
                            <div style={{ display: "flex" }}>
                                <Button
                                    style={{ marginRight: "0.5rem" }}
                                    className={`small solid ${textContent === "" && "no-click"}`}
                                    onClick={handleSubmit}
                                >
                                    ??????
                                </Button>
                                <Button className="small" onClick={handleOnCancel}>??????</Button>
                            </div>
                        </CommentOption>
                    </CSSTransition>
                    {showPicker && (
                        <div ref={refPop} style={{display: "inline"}}>
                            <Picker set="apple" onSelect={addEmoji}/>
                        </div>
                    )}
                </div>
            </MainCommentCompose>
            <CommentList comments={props.comments}/>
        </CommentWrapper>
    );
}

export default CommentSection;
