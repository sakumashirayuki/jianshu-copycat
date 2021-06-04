import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";
import "react-mde/lib/styles/css/react-mde-all.css";

import "./styles.css";

import {
    WriteWrapper,
    CatalogWrapper,
    EditWrapper,
    EditorContainer,
    ListWrapper,
} from "./style";

function Write() {
    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = useState("write");

    const loginState = useSelector((state) => state.loginReducer);

    if (loginState.login) {
        return (
            <WriteWrapper>
                <CatalogWrapper>set list</CatalogWrapper>
                <ListWrapper>blog list</ListWrapper>
                <EditWrapper>
                    <input type="text"/>
                    <EditorContainer>
                        <ReactMde
                            value={value}
                            onChange={setValue}
                            selectedTab={selectedTab}
                            onTabChange={setSelectedTab}
                            generateMarkdownPreview={(markdown) =>
                            Promise.resolve(<ReactMarkdown source={markdown} />)
                            }
                            childProps={{
                                writeButton: {
                                    tabIndex: -1
                                }
                            }}
                        />
                    </EditorContainer>
                </EditWrapper>
            </WriteWrapper>
        );
    } else {
        return <Redirect to="/login" />;
    }
}

export default Write;
