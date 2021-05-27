import React from "react";

import { AiOutlineClose } from "react-icons/ai";

import {
    MiddleWindow,
    CloseBtn,
} from "../style";

function SponseDialog(props){
    return (        
    <MiddleWindow
        tabIndex="-1"
        role="dialog"
        aria-labelledby="dialog1Title"
        aria-describedby="dialog1Desc"
    >
        <CloseBtn onClick={()=>props.handleOnClose("sponseDialog")}>
            <AiOutlineClose />
        </CloseBtn>
    </MiddleWindow>);
};

export default SponseDialog;