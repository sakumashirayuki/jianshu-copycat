import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import { CSSTransition } from "react-transition-group";
import { HashLink as Link } from "react-router-hash-link";
import { useHistory } from "react-router-dom";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import { AiFillLike, AiOutlineEllipsis } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import {
    FooterWrapper,
    FooterCompose,
    RoundButton,
    FooterButton,
} from "../style";

import { Button } from "../../../common/header/style";

import { actions } from "../store";

import { getPositionForTextArea } from "../../../util/textEditor";

function Footer() {
    const { SubMenu } = Menu;

    const [focus, setFocus] = useState(false);
    const [textContent, setTextContent] = useState("");
    const [showPicker, setShowPicker] = useState(false);

    const refPicker = useRef(null);
    const refPop = useRef(null);
    const refTextArea = useRef(null);

    let history = useHistory();

    const detailState = useSelector((state) => state.detailReducer);
    const loginState = useSelector((state) => state.loginReducer);

    const dispatch = useDispatch();

    const menu = (
        <Menu>
            <SubMenu title="分享文章">
                <Menu.Item>分享到微信</Menu.Item>
                <Menu.Item>分享到微博</Menu.Item>
            </SubMenu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    收入专题
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    收藏文章
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    举报文章
                </a>
            </Menu.Item>
        </Menu>
    );

    const handleOnFocus = () => {
        setFocus(true);
    };

    const handleOnLike = () => {
        if (loginState.login && detailState.preference === "") {
            dispatch(actions.likeAction());
        } else if (detailState.preference === "like") {
            // remove like
            dispatch(actions.removePreferenceAction());
        } else if (detailState.preference === "dislike") {
            // alert
            dispatch(actions.showMessageAction());
        } else {
            history.push("/login");
        }
    };

    const handleSubmit = () => {
        if(textContent !== "")
            console.log("submit!");
    };

    const handleOnCancel = () => {
        setFocus(false);
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

    const changeTextArea = (e) => {
        setTextContent(e.target.value);
    }

    const addEmoji = (emoji) => {
        const currenCursorPosition = getPositionForTextArea(refTextArea);
        console.log(refTextArea);
        setTextContent((prevContent)=>{
            return prevContent.substring(0, currenCursorPosition.start) + emoji.native + prevContent.substring(currenCursorPosition.end);
        });
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return (
        <FooterWrapper>
            <CSSTransition in={focus} timeout={300} classNames="slide">
                <FooterCompose
                    type="text"
                    placeholder="写下你的评论"
                    onFocus={handleOnFocus}
                    ref={refTextArea}
                    value={textContent}
                    onChange={changeTextArea}
                />
            </CSSTransition>
            {focus ? (
                <div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            position: "relative"
                        }}
                    >
                        <div
                            ref={refPicker}
                            style={{
                                position: "absolute",
                                left: "-48px",
                                bottom: "-4px",
                                display: "flex",
                                alignContent: "flex-end",
                            }}
                        >
                            <HiOutlineEmojiHappy
                                style={{
                                    fontSize: "20px",
                                    lineHeight: "18px",
                                    margin: "auto",
                                    color: "#969696",
                                }}
                                onClick={handleOnClickPicker}
                            />
                        </div>
                        {showPicker && (
                        <div 
                            ref={refPop} 
                            style={{
                                position: "fixed",
                                left: "960px",
                                bottom: "46px"
                            }}
                        >
                            <Picker set="apple" onSelect={addEmoji}/>
                        </div>
                        )}
                        <Button
                            style={{ marginRight: "0.5rem" }}
                            className={`small solid ${textContent === "" && "no-click"}`}
                            onClick={handleSubmit}
                        >
                            发布
                        </Button>
                        <Button className="small" onClick={handleOnCancel}>取消</Button>
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        color: "#969696",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                    }}
                >
                    <FooterButton
                        className={`${
                            detailState.preference === "like" && "activate"
                        }`}
                        onClick={handleOnLike}
                    >
                        <AiFillLike style={{ fontSize: "22px" }} />
                        <span style={{ marginRight: "8px" }}>
                            赞{detailState.likes}
                        </span>
                    </FooterButton>
                    <Link to="#comments-section" style={{ color: "inherit" }}>
                        <FooterButton>
                            <FaCommentAlt style={{ fontSize: "22px" }} />
                            <span style={{ marginRight: "8px" }}>
                                评论{detailState.comments.length}
                            </span>
                        </FooterButton>
                    </Link>
                    <div>
                        <Dropdown overlay={menu} placement="topCenter">
                            <RoundButton>
                                <AiOutlineEllipsis />
                            </RoundButton>
                        </Dropdown>
                    </div>
                </div>
            )}
        </FooterWrapper>
    );
}

export default Footer;
