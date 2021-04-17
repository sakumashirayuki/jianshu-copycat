import React, { useRef, useEffect } from "react";
import axios from "axios";
import { StyledDownloadPop } from "../style"

function DownloadPop() {
  const qrPop = useRef(null);

  useEffect(() => {
    axios.get("/api/imgs/QR.png", { responseType: "blob" }).then((response) => {
      const reader = new window.FileReader();
      reader.readAsDataURL(response.data);
      reader.onload = () => {
        const imageDataUrl = reader.result;
        qrPop.current.setAttribute("src", imageDataUrl);
      };
    });
  }, []);

  return (
    <StyledDownloadPop>
      <img src="" alt="" ref={qrPop} />
    </StyledDownloadPop>
  );
}

export default DownloadPop;
