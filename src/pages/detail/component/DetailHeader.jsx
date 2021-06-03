import React from "react";
import { useSelector } from "react-redux";

import { Button } from "../../../common/header/style";
import { TitleHeader } from "../style";

import { action } from "../store";

function DetailHeader() {
    const detailState = useSelector((state) => state.detailReducer);

    const handleOnClickSponse = () => {

    }

    return (
        <TitleHeader className="title-header">
            <h1 style={{padding: "0 24px"}}>{detailState.title}</h1>
            <div style={{ display: "flex", alignItems: "center"}}>
                <img
                    src={detailState.authorInfo.imgUrl}
                    alt=""
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                    }}
                />
                <p style={{margin: "0 10px", color:"#7d7d7d"}}>{detailState.authorInfo.name}</p>
                <Button className="small reg" style={{marginRight: "8px"}}>关注</Button>
                <Button className="small solid" onClick={handleOnClickSponse}>赞赏支持</Button>
            </div>
        </TitleHeader>
    );
}

export default DetailHeader;
