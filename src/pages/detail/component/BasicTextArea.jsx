import React, { useState, useRef, useEffect } from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import { CommentOption } from "../style";
import { Button } from "../../../common/header/style";

import { getPositionForTextArea } from "../../../util/textEditor";

function BasicTextArea(props) {
    const [showPicker, setShowPicker] = useState(false);
    const [textContent, setTextContent] = useState("");

    const refPicker = useRef(null);
    const refTextArea = useRef(null);
    const refPop = useRef(null);

    const changeTextArea = (e) => {
        setTextContent(e.target.value);
    }

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
        // hide the whole textarea
        props.handleOnclose();
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
        <div style={{ width: "100%", marginTop: "16px" }}>
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
                ref={refTextArea}
                onChange={changeTextArea}
                value={textContent}
            ></textarea>
            <CommentOption>
                <div style={{ display: "flex", lineHeight: "29px" }}>
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
                        className={`small solid ${
                            textContent === "" && "no-click"
                        }`}
                        onClick={handleSubmit}
                    >
                        发布
                    </Button>
                    <Button className="small" onClick={handleOnCancel}>
                        取消
                    </Button>
                </div>
            </CommentOption>
            {showPicker && (
                <div ref={refPop} style={{ display: "inline" }}>
                    <Picker set="apple" onSelect={addEmoji} />
                </div>
            )}
        </div>
    );
}

export default BasicTextArea;
