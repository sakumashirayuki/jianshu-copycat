import React, { useState } from "react";

import { AiOutlineClose, AiFillAlipaySquare } from "react-icons/ai";
import { FaCandyCane } from "react-icons/fa";
import { RiWechatPayFill } from "react-icons/ri";

import {
    MiddleWindow,
    CloseBtn,
    SponseTitle,
    SponseSelection,
    SponseOption,
} from "../style";

import { Button } from "../../../common/header/style";

function SponseDialog(props) {
    const paymentOptions = [2, 5, 10, 20, 50];

    const [payment, setPayment] = useState({
        money: paymentOptions[0],
        index: 0,
    });
    const [focusCustom, setFocusCustom] = useState(false);
    const [modePayment, setModePayment] = useState("");

    const handleOnChooseValue = (money, index) => {
        setPayment({ money, index });
        setFocusCustom(false);
    };
    const handleOnFoucsCustom = () => {
        setPayment({
            money: 1,
            index: -1,
        });
        setFocusCustom(true);
    };
    const handleOnChangeCustom = (e) => {
        setPayment((prevPayment) => {
            return { ...prevPayment, money: e.target.value };
        });
    };
    const selectPayment = (mode) => {
        switch (mode) {
            case "alipay":
                setModePayment("alipay");
                break;
            case "wechat":
                setModePayment("wechat");
                break;
            case "jianshu":
                setModePayment("jianshu");
                break;
            default:
                break;
        }
    };

    return (
        <MiddleWindow
            tabIndex="-1"
            role="dialog"
            aria-labelledby="dialog1Title"
            aria-describedby="dialog1Desc"
        >
            <CloseBtn onClick={() => props.handleOnClose("sponseDialog")}>
                <AiOutlineClose />
            </CloseBtn>
            <div style={{ padding: "48px 64px" }}>
                <SponseTitle>
                    <img src={props.authorAvatar} alt="author" />
                    给作者送糖
                </SponseTitle>
                <SponseSelection>
                    {paymentOptions.map((money, index) => (
                        <SponseOption
                            onClick={() => handleOnChooseValue(money, index)}
                            key={index}
                            className={`${
                                payment.index === index && "activate"
                            }`}
                        >
                            <FaCandyCane />
                            <span
                                style={{
                                    fontSize: "28px",
                                    marginLeft: "0.5rem",
                                }}
                            >
                                {money}
                            </span>
                        </SponseOption>
                    ))}
                    <SponseOption
                        style={{ position: "relative" }}
                        onFocus={handleOnFoucsCustom}
                        className={`${focusCustom && "activate"}`}
                    >
                        <span className={`${focusCustom && "hide"}`}>
                            自定义
                        </span>
                        <input
                            type="number"
                            value={payment.money}
                            className={`${!focusCustom && "hide"}`}
                            onChange={handleOnChangeCustom}
                        />
                    </SponseOption>
                </SponseSelection>
                <textarea
                    placeholder="给Ta留言..."
                    style={{
                        width: "100%",
                        height: "80px",
                        margin: "10px 0",
                        padding: "12px",
                        border: "transparent",
                        borderRadius: "5px",
                        backgroundColor: "#f2f2f2",
                        resize: "none",
                        outline: "none",
                    }}
                ></textarea>
                <div>
                    <p style={{ textAlign: "center", margin: "12px 0" }}>选择支付方式</p>
                    <SponseSelection>
                        <SponseOption
                            className={`${
                                modePayment === "alipay" && "activate"
                            }`}
                            onClick={() => selectPayment("alipay")}
                        >
                            <RiWechatPayFill
                                style={{ fontSize: "30px", color: "#00bb29" }}
                            />
                            <span>微信支付</span>
                        </SponseOption>
                        <SponseOption
                            className={`${
                                modePayment === "wechat" && "activate"
                            }`}
                            onClick={() => selectPayment("wechat")}
                        >
                            <AiFillAlipaySquare
                                style={{ fontSize: "30px", color: "#1979FF" }}
                            />
                            <span>支付宝</span>
                        </SponseOption>
                        <SponseOption
                            className={`disable ${
                                modePayment === "jianshu" && "activate"
                            }`}
                            onClick={() => selectPayment("jianshu")}
                        >
                            简书余额
                        </SponseOption>
                    </SponseSelection>
                </div>
                <Button
                    className="solid large"
                    style={{ width: "50%", margin: "auto" }}
                >
                    确认支付￥{payment.money}
                </Button>
            </div>
        </MiddleWindow>
    );
}

export default SponseDialog;
