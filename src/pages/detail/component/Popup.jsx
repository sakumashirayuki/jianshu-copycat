import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { PopupContainer } from "../style";

function Popup(props){
    return (
    <PopupContainer>
        <AiFillCloseCircle style={{color: "#ec7259", marginRight: "0.5rem"}}/>
        {props.content}
    </PopupContainer>);
};

export default Popup;
