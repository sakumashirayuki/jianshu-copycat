import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import ReactMde, { getDefaultToolbarCommands } from "react-mde";
import ReactMarkdown from "react-markdown";
import "react-mde/lib/styles/css/react-mde-all.css";

import { actions } from "./store";

import { MdPublish } from "react-icons/md";

import Catalog from "./component/Catalog";
import BlogList from "./component/BlogList";

import "./styles.css";

import { WriteWrapper, EditWrapper, EditTitle, EditorContainer, PlainEditor } from "./style";

const saveCommand = {
    name: "save-command",
    icon: () => (
        <span role="img" aria-label="save">
            💾
        </span>
    ),
    execute: (opts) => {
        console.log("save blog!");
    },
};

const publishCommand = {
    name: "publish-command",
    icon: () => <MdPublish />,
    execute: (opts) => {
        console.log("publish blog!");
    },
};

const darkThemeEditor = {
    main: "#3d3d3d",
    fontColor: "#b3b3b3",
    headerColor: "#fff",
    headerBack: "#262626",
    border: "#262626",
    buttonColor: "#fff"
};

const darkThemePlain = {
    main: "#3d3d3d",
    fontColor: "#595959",
    shadow: "#666"
};

function Write() {
    // const [value, setValue] = useState("**Hello world!!!**\n\nwhat a beautiful day!");
    const [selectedTab, setSelectedTab] = useState("write");

    const loginState = useSelector((state) => state.loginReducer);
    const writeState = useSelector((state) => state.writeReducer);

    const dispatch = useDispatch();

    const setValue = (str) => {
        dispatch(actions.changeContentAction(str));
    };

    const handleOnChangeTitle = (e) => {
        // debounce(()=>dispatch(actions.changeTitleAction(e.target.value)), 100);
        dispatch(actions.changeTitleAction(e.target.value));
    };

    useEffect(() => {
        dispatch(actions.getWriteAction());
    }, []);

    useEffect(() => {
        dispatch(actions.loadThemeAction());
    }, [])

    if (loginState.login) {
        return (
            <WriteWrapper>
                <Catalog />
                <BlogList />
                <EditWrapper>
                    {writeState.catalogList[writeState.selectedCatId].list
                        .length ? (
                        <div>
                            <EditTitle
                                type="text"
                                value={
                                    writeState.catalogList[
                                        writeState.selectedCatId
                                    ].list.length
                                        ? writeState.catalogList[
                                              writeState.selectedCatId
                                          ].list[writeState.selectedBlogId]
                                              .title
                                        : ""
                                }
                                onChange={handleOnChangeTitle}
                                theme={writeState.theme==="dark" && darkThemeEditor}
                            />
                            <EditorContainer theme={writeState.theme==="dark" && darkThemeEditor}>
                                <ReactMde
                                    commands={{
                                        save: saveCommand,
                                        publish: publishCommand,
                                    }}
                                    toolbarCommands={[
                                        ...getDefaultToolbarCommands(),
                                        ["save", "publish"],
                                    ]}
                                    value={
                                        writeState.catalogList[
                                            writeState.selectedCatId
                                        ].list.length
                                            ? writeState.catalogList[
                                                  writeState.selectedCatId
                                              ].list[writeState.selectedBlogId]
                                                  .content
                                            : ""
                                    }
                                    onChange={setValue}
                                    selectedTab={selectedTab}
                                    onTabChange={setSelectedTab}
                                    generateMarkdownPreview={(markdown) =>
                                        Promise.resolve(
                                            <ReactMarkdown>
                                                {markdown}
                                            </ReactMarkdown>
                                        )
                                    }
                                    childProps={{
                                        writeButton: {
                                            tabIndex: -1,
                                        },
                                    }}
                                />
                            </EditorContainer>
                        </div>
                    ) : (
                        <PlainEditor theme={writeState.theme==="dark" && darkThemePlain}>
                            <span>简书</span>
                        </PlainEditor>
                    )}
                </EditWrapper>
            </WriteWrapper>
        );
    } else {
        return <Redirect to="/login" />;
    }
}

export default Write;
