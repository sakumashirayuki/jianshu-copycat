import React, { useEffect, useRef } from "react";
import axios from "axios";

import { DownloadWrapper } from "../style"

function Download(){
    const qrImg = useRef(null);
    useEffect(()=>{
        axios.get('/api/imgs/QR.png', {responseType: "blob"})
        .then((response)=>{
            const reader = new window.FileReader();
            reader.readAsDataURL(response.data);
            reader.onload= () => {
                const imageDataUrl = reader.result;
                qrImg.current.setAttribute("src", imageDataUrl);
            }
        })
    },[]);
    return(
        <DownloadWrapper>
            <img src="" alt="" ref={qrImg}/>
            <p className="title">下载简书手机App<span className="iconfont">&#xe607;</span></p>
            <p className="description">随时随地发现和创作内容</p>
        </DownloadWrapper>
    )
}

export default Download;