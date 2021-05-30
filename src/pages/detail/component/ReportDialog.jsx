import React from "react";
import { useDispatch } from "react-redux"; 

import { AiOutlineClose } from "react-icons/ai";

import {
    MiddleWindow,
    CloseBtn,
    ModalHeader,
    ModalContent,
} from "../style";

import {
    Button
}from "../../../common/header/style";

import { actions } from "../store";

function ReportDialog(){
    const dispatch = useDispatch();

    const handleOnClickClose = () => {
        dispatch(actions.closeReportAction());
    };

    return (
        <MiddleWindow
            tabIndex="-1"
            role="dialog"
            aria-labelledby="dialog1Title"
            aria-describedby="dialog1Desc"
            style={{height: "auto"}}
        >
            <CloseBtn onClick={handleOnClickClose}>
                <AiOutlineClose />
            </CloseBtn>
            <ModalHeader id="dialog1Title" style={{fontWeight: "bold"}}>举报文章</ModalHeader>
            <ModalContent style={{padding: "0"}}>
                <div style={{padding: "16px 24px", borderBottom: "1px solid #eee", boxSizing: "border-box"}}>
                    <div style={{marginBottom: "16px", display: "flex", justifyContent:"center", fontSize: "15px"}}>
                        <label>
                            <input type="radio" name="type" value="advertise" checked/>
                            <span style={{margin: "auto 8px"}}>广告及垃圾信息</span>
                        </label>
                        <label>
                            <input type="radio" name="type" value="plagiarize" />
                            <span style={{margin: "auto 8px"}}>抄袭或未授权转载</span>
                        </label>
                        <label>
                            <input type="radio" name="type" value="other" />
                            <span style={{margin: "auto 8px"}}>其他</span>
                        </label>
                    </div>
                    <textarea                         
                        placeholder="写下举报的详细情况（选填）"
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
                    ></textarea>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end", padding: "16px 24px"}}>
                    <Button className="small" style={{marginRight: "8px"}}>取消</Button>
                    <Button className="small" style={{color: "#42c02e", borderColor: "#42c02e"}}>提交</Button>
                </div>
            </ModalContent>
        </MiddleWindow>
    );
}

export default ReportDialog;