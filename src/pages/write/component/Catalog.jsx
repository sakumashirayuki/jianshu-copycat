import React from "react";
import { Link } from "react-router-dom";

import {
    CatalogWrapper,
} from "../style";
import { Button } from "../../../common/header/style";

function Catalog(){
    return (
        <CatalogWrapper>
            <div>
                <Link to="/">
                    <Button className="reg" style={{margin: "30px 18px 15px"}}>回首页</Button>
                </Link>
                <div style={{margin: "20px 0 10px", padding: "0 15px"}}>
                    <span className="iconfont" style={{marginRight: "5px", fontSize: "inherit"}}>
                        &#xe60d;
                    </span>
                    新建文集
                </div>
                <ul>
                    <li><div>日记本</div></li>
                    <li><div>随笔</div></li>
                </ul>
            </div>
            <footer>
                <div>设置</div>
                <div>遇到问题</div>
            </footer>
        </CatalogWrapper>
    );
}

export default Catalog;