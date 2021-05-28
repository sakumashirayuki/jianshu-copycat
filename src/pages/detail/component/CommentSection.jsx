import React, { useState, useRef, useEffect } from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import { CommentWrapper, MainCommentCompose, CommentOption } from "../style";

import { Button } from "../../../common/header/style";

function CommentSection(props) {
    const [showOption, setShowOption] = useState(false);
    const [showPicker, setShowPicker] = useState(false);

    const refPicker = useRef(null);
    const refPop = useRef(null);

    const handleOnFocusText = () => {
        setShowOption(true);
    };

    const handleOnClickPicker = () => {
        setShowPicker(true);
    };

    const handleClickOutside = (event) => {
        console.log(refPicker.current.contains(event.target));
        if (
            refPicker.current &&
            !refPicker.current.contains(event.target) &&
            refPop.current &&
            !refPop.current.contains(event.target)
        ) {
            setShowPicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return (
        <CommentWrapper>
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
                        placeholder="写下你的留言"
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
                    ></textarea>
                    {showOption && (
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
                                <p>Ctrl + Enter 发表</p>
                            </div>
                            <div style={{ display: "flex" }}>
                                <Button
                                    style={{ marginRight: "0.5rem" }}
                                    className="small solid"
                                >
                                    发布
                                </Button>
                                <Button className="small">取消</Button>
                            </div>
                        </CommentOption>
                    )}
                    {showPicker && (
                        <div ref={refPop} style={{display: "inline"}}>
                            <Picker set="apple" />
                        </div>
                    )}
                </div>
            </MainCommentCompose>
            <p>comment~</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
            <p>哈哈哈哈哈</p>
        </CommentWrapper>
    );
}

export default CommentSection;
