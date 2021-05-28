import React, { useState } from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import { CommentWrapper, MainCommentCompose, CommentOption } from "../style";

import { Button } from "../../../common/header/style";

function CommentSection(props) {
    const [showOption, setShowOption] = useState(false);

    const handleOnFocusText = () => {
        setShowOption(true);
    };

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
                                <HiOutlineEmojiHappy
                                    style={{
                                        margin: "auto 0.5rem auto 0",
                                        fontSize: "18px",
                                    }}
                                />
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
