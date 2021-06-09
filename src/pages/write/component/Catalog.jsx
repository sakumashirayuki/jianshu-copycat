import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";

import { AiFillSetting } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";

import { CatalogWrapper, CatalogItem, CatalogFooter } from "../style";
import { Button } from "../../../common/header/style";

import { actions } from "../store";

const darkThemeBackground = {
    main: "#2e2e2e",
    fontColor: "#b3b3b3"
};
const darkThemeItem = {
    main: "#262626",
    line: "#2e2e2e"
};

function Catalog() {
    const writeState = useSelector((state) => state.writeReducer);
    const dispatch = useDispatch();

    const handleChangeTheme = () => {
        dispatch(actions.changeThemeAction());
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    简书作者实名认证
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <div onClick={handleChangeTheme}>
                    {writeState.theme==="dark" ? "关闭夜间模式" : "开启夜间模式"}
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    回收站
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    帮助与反馈
                </a>
            </Menu.Item>
        </Menu>
    );

    const handleOnClickCatItem = (catInd) => {
        dispatch(actions.selectCatalogAction(catInd));
    };

    return (
        <CatalogWrapper theme={writeState.theme==="dark"&&darkThemeBackground}>
            <div>
                <Link to="/">
                    <Button
                        className="reg"
                        style={{ margin: "30px 18px 15px" }}
                    >
                        回首页
                    </Button>
                </Link>
                <div style={{ margin: "20px 0 10px", padding: "0 15px" }}>
                    <span
                        className="iconfont"
                        style={{ marginRight: "5px", fontSize: "inherit" }}
                    >
                        &#xe60d;
                    </span>
                    新建文集
                </div>
                <ul>
                    {writeState.catalogList.map((item, index) => (
                        <CatalogItem
                            key={item.id}
                            className={`${
                                index === writeState.selectedCatId && "active"
                            }`}
                            onClick={() => handleOnClickCatItem(index)}
                            theme={writeState.theme==="dark"&&darkThemeItem}
                        >
                            <div
                                style={{ float: "right" }}
                                className="setting-icon"
                            >
                                <AiFillSetting />
                            </div>
                            <div>{item.name}</div>
                        </CatalogItem>
                    ))}
                </ul>
            </div>
            <CatalogFooter>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Dropdown overlay={menu} placement="topLeft">
                        <div>
                            <HiMenu />
                            设置
                        </div>
                    </Dropdown>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <span>
                        遇到问题
                    </span>
                    <BiHelpCircle />
                </div>
            </CatalogFooter>
        </CatalogWrapper>
    );
}

export default Catalog;
