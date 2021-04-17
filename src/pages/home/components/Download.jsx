import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import axios from "axios";

import { DownloadWrapper } from "../style";
import DownloadPop from "./DownloadPop";

function Download() {
  const qrImg = useRef(null);
  const [mouseInState, setMouseInState] = useState(false);
  useEffect(() => {
    axios.get("/api/imgs/QR.png", { responseType: "blob" }).then((response) => {
      const reader = new window.FileReader();
      reader.readAsDataURL(response.data);
      reader.onload = () => {
        const imageDataUrl = reader.result;
        qrImg.current.setAttribute("src", imageDataUrl);
        // qrPop.current.setAttribute("src", imageDataUrl);
      };
    });
  }, []);
  const handleOnMouseEnter = () => {
    setMouseInState(true);
  };
  const handleOnMouseLeave = () => {
    setMouseInState(false);
  };
  return (
    <div style={{ position: "relative" }}>
      <DownloadWrapper
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <img src="" alt="" ref={qrImg} />
        <p className="title">
          下载简书手机App<span className="iconfont">&#xe607;</span>
        </p>
        <p className="description">随时随地发现和创作内容</p>
      </DownloadWrapper>
      <CSSTransition
            in={mouseInState}
            appear={false}
            unmountOnExit
            timeout={150}
            classNames="fade">
        <DownloadPop />
      </CSSTransition>
    </div>
  );
}

export default Download;
