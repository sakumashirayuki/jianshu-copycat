import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import {
    MiddleWindow,
    CloseBtn,
    ModalHeader,
    ModalContent,
    UserItem,
} from "../style";

function Modal(props) {
    return (
        <MiddleWindow
            tabIndex="-1"
            role="dialog"
            aria-labelledby="dialog1Title"
            aria-describedby="dialog1Desc"
        >
            <CloseBtn onClick={props.handleOnClose}>
                <AiOutlineClose />
            </CloseBtn>
            <ModalHeader id="dialog1Title">{props.title}</ModalHeader>
            <ModalContent id="dialog1Desc">
                {props.list.map((item) => (
                    <UserItem key={item.id}>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <img src={item.avatar} alt="avatar" className="avatar"/>
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <a href="/" className="follow">
                                <span className="iconfont">&#xe60d;</span>
                                关注
                            </a>
                        </div>
                    </UserItem>
                ))}
            </ModalContent>
        </MiddleWindow>
    );
}

export default Modal;
