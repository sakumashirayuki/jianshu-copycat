import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import {
    WriteWrapper,
    CatalogWrapper,
    EditWrapper,
    PreviewWrapper,
} from "./style";

function Write() {
    const loginState = useSelector((state) => state.loginReducer);

    const [markdown, setMarkdown] = useState("## markdown preview");
    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    if (loginState.login) {
        return (
            <WriteWrapper>
                <CatalogWrapper>hello</CatalogWrapper>
                <EditWrapper>
                    <textarea
                        value={markdown}
                        onChange={handleChange}
                    ></textarea>
                </EditWrapper>
                <PreviewWrapper>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </PreviewWrapper>
            </WriteWrapper>
        );
    } else {
        return <Redirect to="/login" />;
    }
}

export default Write;
